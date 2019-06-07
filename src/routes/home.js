import React, { Component } from "react";
import getData, {
  constructQuery,
  constructQueryAfter
} from "../components/fetch";
import { InfoBlock, Tabs } from "../components/main";
import { Content, ButtonMain } from "../components/styles";

import Data, { queryList, initData } from "../components/data";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        new Data("Week", initData, ""),
        new Data("Month", initData, ""),
        new Data("All Time", initData, "")
      ]
    };
  }

  componentDidMount() {
    const newData = this.state.data.slice();
    const idList = ["Week", "Month", "All Time"];

    for (let i = 0; i < newData.length; i++) {
      this._asyncRequest = getData(queryList[i], constructQuery).then(
        result => {
          this._asyncRequest = null;
          const resultData = result.data.search;

          newData[i] = new Data(
            idList[i],
            resultData.nodes,
            resultData.pageInfo.endCursor
          );

          this.setState({
            data: newData
          });
        }
      );
    }
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  loadData = (id, cursor) => {
    const currData = this.state.data;
    const idx = currData.findIndex(elem => elem.id === id);

    getData(queryList[idx], constructQueryAfter, cursor).then(result => {
      const resultData = result.data.search;

      currData[idx].data = currData[idx].data.concat(resultData.nodes);
      currData[idx].cursor = resultData.pageInfo.endCursor;

      this.setState({
        data: currData
      });
    });
  };

  render() {
    return (
      <Tabs>
        {this.state.data.map(elem => {
          return (
            <div key={elem.id} label={elem.id}>
              <View
                id={elem.id}
                data={elem.data}
                cursor={elem.cursor}
                loadData={this.loadData}
              />
            </div>
          );
        })}
      </Tabs>
    );
  }
}

export class View extends Component {
  onClick = () => {
    this.props.loadData(this.props.id, this.props.cursor);
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
