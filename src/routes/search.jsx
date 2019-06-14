import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ViewSingle } from '../components/view';
import getJSON, { requestUrl, api, perPage, query } from '../components/fetch';
import Data from '../components/data';
import { ButtonIcon } from '../styles/button';
import { TextInput, Form } from '../styles/input';
import { Img } from '../styles/img';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
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
    let currData = data;
    const { search } = this.state;
    const argsList = [api, query(search), perPage];
    if (page > 1) {
      argsList.push(`page=${page + 1}`);
    }

    const url = requestUrl(...argsList);

    getJSON(url).then(result => {
      currData = currData.concat(Data.fromGithubRes(result.items));
      const currPage = page + 1;

      this.setState({
        data: currData,
        page: currPage
      });
    });
  };

  onInput = event => {
    const inputVal = event.target.value;

    this.setState({
      search: inputVal
    });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.reloadData();
    }
  };

  render() {
    const {
      onInput,
      onSubmit,
      onKeyPress,
      loadData,
      reloadData,
      state: { search, data },
      props: { save, saved }
    } = this;

    return (
      <>
        <Form onSubmit={onSubmit} noValidate>
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
  saved: PropTypes.array.isRequired
};
