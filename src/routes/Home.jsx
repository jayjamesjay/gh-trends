import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getAndSave, { Url, defApi, perPage, addLang, loadingState } from '../utils/Fetch';
import { ViewSingle } from '../components/View';
import { queries, languages } from '../components/Data';
import RepoInfoList from '../utils/RepoInfoList';
import RepoInfo from '../utils/RepoInfo';
import { H1 } from '../styles/Headers';
import { FormAlt } from '../styles/Form';
import Select from '../components/Select';
import { save } from '../actions';

const langs = ['All Languages', ...Object.keys(languages)];
const timeList = Object.keys(queries);

const mapStateToProps = (state) => ({
  saved: state.saved,
});

const mapDispatchToProps = { save };

// eslint-disable-next-line no-shadow
export function Home({ saved, save }) {
  const [lang, setLang] = React.useState('All');
  const [time, setTime] = React.useState('This Week');
  const [repoInfo, setRepoInfo] = React.useState(new RepoInfoList([], 1));
  const [loading, setLoading] = React.useState(loadingState.INPROGRESS);
  const query = useMemo(() => addLang(queries[time], lang), [lang, time]);

  const onSelect = useCallback((event, callback) => {
    const val = event.target.value;
    callback(val);
  }, []);

  const selectLang = useCallback(
    (event) => {
      onSelect(event, setLang);
    },
    [onSelect, setLang],
  );

  const selectTime = useCallback(
    (event) => {
      onSelect(event, setTime);
    },
    [onSelect, setTime],
  );

  async function loadData(currData = [], currPage = 1) {
    const abortController = new AbortController();
    const { signal } = abortController;

    setLoading(loadingState.INPROGRESS);

    const preUrl = new Url(defApi).query(query).parts(perPage);
    const infoList = new RepoInfoList(currData, currPage);

    try {
      await getAndSave(infoList, preUrl, signal, setRepoInfo);
      setLoading(loadingState.LOADED);
    } catch (error) {
      setLoading(loadingState.ERORR);
    }
  }

  useEffect(() => {
    loadData();

    return () => {};
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

Home.propTypes = {
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired,
  save: PropTypes.func.isRequired,
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
