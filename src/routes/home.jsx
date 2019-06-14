import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getJSON, { requestUrl, api, sort, perPage, query } from '../components/fetch';
import Tabs from '../components/tabs';
import { ViewId } from '../components/view';
import Data, { queryList, initData } from '../components/data';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        new Data('Week', initData, 1),
        new Data('Month', initData, 1),
        new Data('All Time', initData, 1)
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

        data[i] = new Data(idList[i], Data.fromGithubRes(result.items), 1);

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
    const currData = data.slice();
    const idx = data.findIndex(elem => elem.id === id);
    const url = requestUrl(
      api,
      query(queryList[idx]),
      sort,
      perPage,
      `page=${currData[idx].page + 1}`
    );

    getJSON(url).then(result => {
      currData[idx].data = currData[idx].data.concat(Data.fromGithubRes(result.items));
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
  saved: PropTypes.array.isRequired
};
