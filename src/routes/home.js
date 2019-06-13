import React, { Component } from 'react';
import getJSON, {
  requestUrl,
  api,
  sort,
  perPage,
  query,
} from '../components/fetch';
import { Tabs, ViewId } from '../components/main';
import Data, { queryList, initData } from '../components/data';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        new Data('Week', initData, 1),
        new Data('Month', initData, 1),
        new Data('All Time', initData, 1),
      ],
    };
  }

  componentDidMount() {
    const currData = this.state.data.slice();
    const idList = ['Week', 'Month', 'All Time'];

    for (let i = 0; i < currData.length; i++) {
      const url = requestUrl(api, query(queryList[i]), sort, perPage);

      this._asyncRequest = getJSON(url).then(result => {
        this._asyncRequest = null;

        currData[i] = new Data(idList[i], Data.fromGithubRes(result.items), 1);

        this.setState({
          data: currData,
        });
      });
    }
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  loadData = id => {
    const currData = this.state.data.slice();
    const idx = currData.findIndex(elem => elem.id === id);
    const url = requestUrl(
      api,
      query(queryList[idx]),
      sort,
      perPage,
      'page=' + (currData[idx].page + 1)
    );

    getJSON(url).then(result => {
      currData[idx].data = currData[idx].data.concat(
        Data.fromGithubRes(result.items)
      );
      currData[idx].page += 1;

      this.setState({
        data: currData,
      });
    });
  };

  render() {
    return (
      <Tabs>
        {this.state.data.map(elem => {
          return (
            <div key={elem.id} label={elem.id}>
              <ViewId
                id={elem.id}
                data={elem.data}
                loadData={this.loadData}
                save={this.props.save}
                saved={this.props.saved}
              />
            </div>
          );
        })}
      </Tabs>
    );
  }
}
