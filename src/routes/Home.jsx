import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getJSON, { requestUrl, api, sort, perPage, query } from '../components/Fetch';
import Tabs from '../components/Tabs';
import { ViewId } from '../components/View';
import RepoInfoList, {
  queryList,
  initData,
  RepoInfo,
  languages,
  addLang
} from '../components/Data';
import { MainHeader, H1 } from '../styles/Headers';
import SelectLang from '../components/SelectLang';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        new RepoInfoList('Week', initData, 1),
        new RepoInfoList('Month', initData, 1),
        new RepoInfoList('All Time', initData, 1)
      ],
      lang: 'all'
    };
  }

  componentDidMount() {
    const {
      reloadData,
      state: { lang }
    } = this;
    reloadData(lang);
  }

  componentWillUnmount() {
    if (this.asyncRequest) {
      this.asyncRequest.cancel();
    }
  }

  makeRequest = (lang, data, ...id) => {
    const currData = data;
    let idxList;

    if (id[0]) {
      idxList = [currData.findIndex(elem => elem.id === id[0])];
    } else {
      idxList = [0, 1, 2];
    }

    idxList.forEach(i => {
      const search = addLang(query(queryList[i]), lang);
      const url = requestUrl(api, search, sort, perPage, `page=${currData[i].page + 1}`);

      this.asyncRequest = getJSON(url)
        .then(result => {
          currData[i].data = currData[i].data.concat(RepoInfoList.fromGithubRes(result.items));
          currData[i].page += 1;

          this.asyncRequest = null;

          this.setState({
            data: currData
          });
        })
        .catch(_ => {
          this.asyncRequest = null;
        });
    });
  };

  loadData = id => {
    const { data, lang } = this.state;
    this.makeRequest(lang, data, id);
  };

  reloadData = lang => {
    this.makeRequest(lang, [
      new RepoInfoList('Week', [], 0),
      new RepoInfoList('Month', [], 0),
      new RepoInfoList('All Time', [], 0)
    ]);
  };

  onSelect = event => {
    if (this.asyncRequest) {
      this.asyncRequest.cancel();
    }

    const lang = event.target.value;
    this.setState({ lang });
    this.reloadData(lang);
  };

  render() {
    const {
      loadData,
      onSelect,
      props: { save, saved },
      state: { data, lang }
    } = this;
    return (
      <>
        <MainHeader>
          <H1>Trending repositories</H1>
        </MainHeader>
        <SelectLang
          curr={lang}
          onSelect={onSelect}
          languages={Object.keys(languages)}
          label="Language"
        />
        <Tabs>
          {data.map(elem => (
            <div key={elem.id} label={elem.id}>
              <ViewId id={elem.id} data={elem.data} loadData={loadData} save={save} saved={saved} />
            </div>
          ))}
        </Tabs>
      </>
    );
  }
}

Home.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
