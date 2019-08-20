import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import getAndSave, { Url, defApi, perPage, addLang } from '../components/Fetch';
import { ViewSingle } from '../components/View';
import RepoInfoList, { queries, RepoInfo, languages, initData } from '../components/Data';
import { H1 } from '../styles/Headers';
import { FormAlt } from '../styles/Form';
import Select from '../components/Select';

const langs = ['All Languages', ...Object.keys(languages)];
const timeList = Object.keys(queries);

export default function Home({ save, saved }) {
  const [lang, setLang] = React.useState('All');
  const [time, setTime] = React.useState('This Week');
  const [query, setQuery] = React.useState(queries[time]);
  const [repoInfo, setRepoInfo] = React.useState(new RepoInfoList(initData, 1));
  const abortController = new AbortController();
  const { signal } = abortController;

  const onSelect = useCallback(
    (newTime, newLang) => {
      const newQuery = addLang(queries[newTime], newLang);
      setQuery(newQuery);
    },
    [setQuery]
  );

  const selectLang = useCallback(
    event => {
      const newLang = event.target.value;
      setLang(newLang);
      onSelect(time, newLang);
    },
    [time, onSelect]
  );

  const selectTime = useCallback(
    event => {
      const newTime = event.target.value;
      setTime(newTime);
      onSelect(newTime, lang);
    },
    [lang, onSelect]
  );

  const request = useCallback(
    (currData, currPage) => {
      const preUrl = new Url(defApi).query(query).parts(perPage);
      const infoList = new RepoInfoList(currData, currPage);
      return getAndSave(infoList, preUrl, signal, setRepoInfo);
    },
    [query, signal, setRepoInfo]
  );
  const loadData = () => request(repoInfo.data, repoInfo.page);
  const reloadData = useCallback(() => request([], 1), [request]);

  useEffect(() => {
    reloadData();

    return () => {
      abortController.abort();
    };
  }, [lang, time]); // eslint-disable-line

  return (
    <>
      <header>
        <H1>Trending repositories</H1>
      </header>
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
