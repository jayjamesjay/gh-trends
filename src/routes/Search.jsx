import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ViewSingle } from '../components/View';
import getJSON, { Url, addLang, api, perPage } from '../components/Fetch';
import RepoInfoList, { RepoInfo, languages } from '../components/Data';
import { ButtonIcon } from '../styles/Button';
import Form from '../styles/Form';
import TextInput from '../styles/Input';
import { H1Alt } from '../styles/Headers';
import { Img } from '../styles/Img';
import SelectLang from '../components/SelectLang';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      lang: 'all',
      data: [],
      page: 1
    };
  }

  loadData = () => {
    const { data, page } = this.state;
    this.makeRequest(data, page);
  };

  reloadData = () => {
    this.makeRequest([], 1);
  };

  makeRequest = (data, page) => {
    const { search } = this.state;
    let currData = data;

    const preUrl = new Url(api).query(search).parts(perPage);
    if (page > 1) {
      preUrl.parts(`page=${page + 1}`);
    }

    const url = preUrl.toString();

    getJSON(url)
      .then(result => {
        currData = currData.concat(RepoInfoList.fromGithubRes(result.items));
        const currPage = page + 1;

        this.setState({
          data: currData,
          page: currPage
        });
      })
      .catch(_ => {
        this.asyncRequest = null;
      });
  };

  onInput = event => {
    const search = event.target.value;
    this.setState({ search });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.reloadData();
    }
  };

  onSelect = event => {
    const lang = event.target.value;
    const { search } = this.state;
    const newSearch = addLang(search.slice(), lang);

    this.setState({ lang, search: newSearch });
  };

  render() {
    const {
      onInput,
      onSubmit,
      onKeyPress,
      onSelect,
      loadData,
      reloadData,
      state: { search, data, lang },
      props: { save, saved }
    } = this;

    return (
      <>
        <header>
          <H1Alt>Search for repositories</H1Alt>
        </header>
        <Form onSubmit={onSubmit} noValidate>
          <SelectLang
            curr={lang}
            onSelect={onSelect}
            languages={Object.keys(languages)}
            label="Add language"
          />
          <TextInput
            aria-label="Search for repositories"
            required
            type="text"
            onChange={onInput}
            value={search}
            onKeyPress={onKeyPress}
          />
          <ButtonIcon onClick={reloadData}>
            <Img src="./assets/img/search.svg" alt="Search" />
          </ButtonIcon>
        </Form>
        <ViewSingle data={data} loadData={loadData} save={save} saved={saved} />
      </>
    );
  }
}

Search.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
