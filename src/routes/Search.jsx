import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ViewSingle } from '../components/View';
import getJSON, { Url, addLang, defApi, perPage } from '../components/Fetch';
import RepoInfoList, { RepoInfo, languages } from '../components/Data';
import { ButtonIcon } from '../styles/Button';
import Form from '../styles/Form';
import TextInput from '../styles/Input';
import { H1Alt } from '../styles/Headers';
import { Img } from '../styles/Img';
import SelectLang from '../components/SelectLang';

const langs = Object.keys(languages);

export default function Search({ save, saved }) {
  const [lang, setLang] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const abortController = new AbortController();
  const { signal } = abortController;

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  });

  const makeRequest = (currData, currPage) => {
    let newData = currData;
    const preUrl = new Url(defApi).query(search).parts(perPage);
    if (currPage > 1) {
      preUrl.parts(`page=${currPage + 1}`);
    }

    const url = preUrl.toString();

    getJSON(url, signal)
      .then(result => {
        newData = newData.concat(RepoInfoList.fromGithubRes(result.items));
        const newPage = currPage + 1;

        setData(newData);
        setPage(newPage);
      })
      .catch(() => {});
  };

  const loadData = () => makeRequest(data, page);
  const reloadData = () => makeRequest([], 1);
  const onSubmit = event => event.preventDefault();
  const onKeyPress = event => (event.key === 'Enter' ? reloadData() : {});

  const onInput = event => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const onSelect = event => {
    const newLang = event.target.value;
    const newSearch = addLang(search.slice(), newLang);

    setLang(newLang);
    setSearch(newSearch);
  };

  return (
    <>
      <header>
        <H1Alt>Search for repositories</H1Alt>
      </header>
      <Form onSubmit={onSubmit} noValidate>
        <SelectLang curr={lang} onSelect={onSelect} languages={langs} label="Add language" />
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

Search.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
