import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ViewSingle } from '../components/View';
import getAndSave, { Url, addLang, defApi, perPage, loadingState } from '../utils/Fetch';
import { languages } from '../components/Data';
import RepoInfoList from '../utils/RepoInfoList';
import RepoInfo from '../utils/RepoInfo';
import { ButtonIcon } from '../styles/Button';
import { FormAlt } from '../styles/Form';
import TextInput from '../styles/Input';
import { H1 } from '../styles/Headers';
import { Img } from '../styles/Img';
import { SelectLang } from '../components/Select';
import { save } from '../actions';
import SearchImg from '../assets/img/search.svg';

const langs = Object.keys(languages);

const mapStateToProps = (state) => ({
  saved: state.saved,
});

const mapDispatchToProps = { save };

// eslint-disable-next-line no-shadow
export function Search({ saved, save }) {
  const [lang, setLang] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(loadingState.LOADED);
  const [repoInfo, setRepoInfo] = React.useState(new RepoInfoList([], 1));
  const abortController = new AbortController();
  const { signal } = abortController;

  const loadData = useCallback(
    (currData = [], currPage = 1) => {
      setLoading(loadingState.INPROGRESS);
      const preUrl = new Url(defApi).query(search).parts(perPage);
      const infoList = new RepoInfoList(currData, currPage);
      return getAndSave(infoList, preUrl, signal, setRepoInfo)
        .then(() => {
          setLoading(loadingState.LOADED);
        })
        .catch(() => {
          setLoading(loadingState.ERORR);
        });
    },
    [signal, search, setRepoInfo],
  );
  const onSubmit = useCallback((event) => event.preventDefault(), []);
  const onKeyPress = useCallback((event) => (event.key === 'Enter' ? loadData() : {}), [loadData]);

  const onInput = useCallback((event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  }, []);

  const onSelect = useCallback(
    (event) => {
      const newLang = event.target.value;
      const newSearch = addLang(search.slice(), newLang);

      setLang(newLang);
      setSearch(newSearch);
    },
    [search],
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
        <ButtonIcon onClick={() => loadData()}>
          <Img src={SearchImg} alt="Search" />
        </ButtonIcon>
      </FormAlt>
      <ViewSingle
        data={repoInfo.data}
        loadData={() => loadData(repoInfo.data, repoInfo.page)}
        save={save}
        saved={saved}
        loading={loading}
      />
    </>
  );
}

Search.propTypes = {
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired,
  save: PropTypes.func.isRequired,
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
