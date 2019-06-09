import React, { Component } from 'react';
import getJSON, {
  requestUrl,
  api,
  order,
  sort,
  perPage,
  query,
} from '../components/fetch';
import { InfoBlock, Tabs } from '../components/main';
import { Content, ButtonMain } from '../components/styles';

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
    const newData = this.state.data.slice();
    const idList = ['Week', 'Month', 'All Time'];

    for (let i = 0; i < newData.length; i++) {
      const url = requestUrl(api, query(queryList[i]), sort, order, perPage);

      this._asyncRequest = getJSON(url).then(result => {
        this._asyncRequest = null;

        newData[i] = new Data(idList[i], Data.fromGithubRes(result.items), 1);

        this.setState({
          data: newData,
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
    const currData = this.state.data;
    const idx = currData.findIndex(elem => elem.id === id);
    const url = requestUrl(
      api,
      query(queryList[idx]),
      sort,
      order,
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
              <View id={elem.id} data={elem.data} loadData={this.loadData} />
            </div>
          );
        })}
      </Tabs>
    );
  }
}

export class View extends Component {
  onClick = () => {
    this.props.loadData(this.props.id);
  };

  render() {
    return (
      <>
        <Content>
          {this.props.data.map((node, id) => (
            <InfoBlock key={id} info={node} />
          ))}
        </Content>
        <footer>
          <ButtonMain onClick={this.onClick}>Show more</ButtonMain>
        </footer>
      </>
    );
  }
}
