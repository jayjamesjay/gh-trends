import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ViewSingle } from '../components/View';
import getJSON, { Url, addLang, defApi, perPage } from '../components/Fetch';
import RepoInfoList, { RepoInfo, languages, imgPath } from '../components/Data';
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
  const [repoInfo, setRepoInfo] = React.useState(new RepoInfoList('Search', [], 1));
  const abortController = new AbortController();
  const { signal } = abortController;

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  });

  const makeRequest = useCallback(
    (currData, currPage) => {
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

          setRepoInfo(new RepoInfoList('Search', newData, newPage));
        })
        .catch(() => {});
    },
    [search, signal]
  );

  const loadData = () => makeRequest(repoInfo.data, repoInfo.page);
  const reloadData = useCallback(() => makeRequest([], 1), [makeRequest]);
  const onSubmit = useCallback(event => event.preventDefault(), []);
  const onKeyPress = useCallback(event => (event.key === 'Enter' ? reloadData() : {}), [
    reloadData
  ]);

  const onInput = useCallback(event => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  }, []);

  const onSelect = useCallback(
    event => {
      const newLang = event.target.value;
      const newSearch = addLang(search.slice(), newLang);

      setLang(newLang);
      setSearch(newSearch);
    },
    [search]
  );

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
          <Img src={`${imgPath}/search.svg`} alt="Search" />
        </ButtonIcon>
      </Form>
      <ViewSingle data={repoInfo.data} loadData={loadData} save={save} saved={saved} />
    </>
  );
}

Search.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
