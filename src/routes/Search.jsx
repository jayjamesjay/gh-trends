import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ViewSingle } from '../components/View';
import Request, { loadingState } from '../utils/Request';
import { addLang } from '../utils/Url';
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

export function Search({ saved, save }) {
  const [lang, setLang] = React.useState('all');
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(loadingState.LOADED);
  const [repoInfo, setRepoInfo] = React.useState(new RepoInfoList([], 1));
  const request = new Request();

  const onSubmit = useCallback((event) => event.preventDefault(), []);
  const onKeyUp = useCallback(
    (event) =>
      event.key === 'Enter'
        ? request.loadData(setLoading, new RepoInfoList([], 1), setRepoInfo, search)
        : {},
    [repoInfo, search],
  );

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
          onKeyUp={onKeyUp}
        />
        <ButtonIcon
          onClick={() => request.loadData(setLoading, new RepoInfoList([], 1), setRepoInfo, search)}
        >
          <Img src={SearchImg} alt="Search" />
        </ButtonIcon>
      </FormAlt>
      <ViewSingle
        data={repoInfo.data}
        loadData={() => request.loadData(setLoading, repoInfo, setRepoInfo, search)}
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
