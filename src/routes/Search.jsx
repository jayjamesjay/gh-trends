import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ViewSingle } from '../components/View';
import getAndSave, { Url, addLang, defApi, perPage } from '../components/Fetch';
import { languages, imgPath } from '../components/Data';
import RepoInfoList from '../components/RepoInfoList';
import RepoInfo from '../components/RepoInfo';
import { ButtonIcon } from '../styles/Button';
import { FormAlt } from '../styles/Form';
import TextInput from '../styles/Input';
import { H1 } from '../styles/Headers';
import { Img } from '../styles/Img';
import { SelectLang } from '../components/Select';

const langs = Object.keys(languages);

export default function Search({ save, saved }) {
  const [lang, setLang] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [repoInfo, setRepoInfo] = React.useState(new RepoInfoList([], 1));
  const abortController = new AbortController();
  const { signal } = abortController;

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  });

  const request = useCallback(
    (currData, currPage) => {
      const preUrl = new Url(defApi).query(search).parts(perPage);
      const infoList = new RepoInfoList(currData, currPage);
      return getAndSave(infoList, preUrl, signal, setRepoInfo);
    },
    [search, signal, setRepoInfo]
  );
  const loadData = () => request(repoInfo.data, repoInfo.page);
  const reloadData = useCallback(() => request([], 1), [request]);
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
        <H1>Search for repositories</H1>
      </header>
      <FormAlt onSubmit={onSubmit} noValidate>
        <SelectLang curr={lang} onSelect={onSelect} options={langs} label="Add language" />
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
      </FormAlt>
      <ViewSingle data={repoInfo.data} loadData={loadData} save={save} saved={saved} />
    </>
  );
}

Search.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
