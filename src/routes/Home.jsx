import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Url, defApi, perPage, addLang, makeRequest } from '../components/Fetch';
import { ViewSingle } from '../components/View';
import RepoInfoList, { queries, RepoInfo, languages } from '../components/Data';
import { MainHeader, H1 } from '../styles/Headers';
import { FormAlt } from '../styles/Form';
import Select from '../components/Select';

const langs = ['All', ...Object.keys(languages)];
const timeList = Object.keys(queries);

export default function Home({ save, saved }) {
  const [lang, setLang] = React.useState('All');
  const [time, setTime] = React.useState('Week');
  const [query, setQuery] = React.useState(queries[time]);
  const [repoInfo, setRepoInfo] = React.useState(new RepoInfoList('All', [], 1));
  const abortController = new AbortController();
  const { signal } = abortController;

  useEffect(() => {
    reloadData();

    return () => {
      abortController.abort();
    };
  }, [lang, time]);

  const selectLang = useCallback(
    event => {
      const newLang = event.target.value;
      const newQuery = addLang(queries[time], newLang);

      setLang(newLang);
      setQuery(newQuery);
    },
    [query]
  );

  const selectTime = useCallback(
    event => {
      const newTime = event.target.value;
      const newQuery = addLang(queries[newTime], lang);

      setTime(newTime);
      setQuery(newQuery);
    },
    [query]
  );

  const request = useCallback(
    (currData, currPage) => {
      const preUrl = new Url(defApi).query(query).parts(perPage);
      const infoList = new RepoInfoList('Search', currData, currPage);
      return makeRequest(infoList, preUrl, signal, setRepoInfo);
    },
    [query, signal, setRepoInfo]
  );
  const loadData = () => request(repoInfo.data, repoInfo.page);
  const reloadData = useCallback(() => request([], 1), [request]);

  return (
    <>
      <MainHeader>
        <H1>Trending repositories</H1>
      </MainHeader>
      <FormAlt>
        <Select curr={lang} onSelect={selectLang} options={langs} label="Languages" />
        <Select curr={time} onSelect={selectTime} options={timeList} label="Periods of time" />
      </FormAlt>
      <ViewSingle data={repoInfo.data} loadData={loadData} save={save} saved={saved} />
    </>
  );
}

Home.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
