import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getJSON, { requestUrl, api, sort, perPage, query } from '../components/fetch';
import Tabs from '../components/tabs';
import { ViewId } from '../components/view';
import RepoInfoList, { queryList, initData, RepoInfo } from '../components/data';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        new RepoInfoList('Week', initData, 1),
        new RepoInfoList('Month', initData, 1),
        new RepoInfoList('All Time', initData, 1)
      ]
    };
  }

  componentDidMount() {
    const { data } = this.state;
    const idList = ['Week', 'Month', 'All Time'];

    for (let i = 0; i < data.length; i += 1) {
      const url = requestUrl(api, query(queryList[i]), sort, perPage);

      this.asyncRequest = getJSON(url).then(result => {
        this.asyncRequest = null;

        data[i] = new RepoInfoList(idList[i], RepoInfoList.fromGithubRes(result.items), 1);

        this.setState({
          data
        });
      });
    }
  }

  componentWillUnmount() {
    if (this.asyncRequest) {
      this.asyncRequest.cancel();
    }
  }

  loadData = id => {
    const { data } = this.state;
    const currData = data;
    const idx = currData.findIndex(elem => elem.id === id);
    const url = requestUrl(
      api,
      query(queryList[idx]),
      sort,
      perPage,
      `page=${currData[idx].page + 1}`
    );

    getJSON(url).then(result => {
      currData[idx].data = currData[idx].data.concat(RepoInfoList.fromGithubRes(result.items));
      currData[idx].page += 1;

      this.setState({
        data: currData
      });
    });
  };

  render() {
    const {
      loadData,
      props: { save, saved },
      state: { data }
    } = this;
    return (
      <Tabs>
        {data.map(elem => (
          <div key={elem.id} label={elem.id}>
            <ViewId id={elem.id} data={elem.data} loadData={loadData} save={save} saved={saved} />
          </div>
        ))}
      </Tabs>
    );
  }
}

Home.propTypes = {
  save: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
