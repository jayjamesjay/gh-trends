import React, { Component } from 'react';
import { ViewSingle } from '../components/main';
import getJSON, { requestUrl, api, perPage, query } from '../components/fetch';
import Data from '../components/data';
import { ButtonIcon } from '../styles/button';
import { TextInput, Form } from '../styles/input';
import { Img } from '../styles/img';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [],
      page: 1,
    };
  }

  loadData = () => {
    this.makeRequest(this.state.data, this.state.page);
  };

  reloadData = () => {
    this.makeRequest([], 1);
  };

  makeRequest = (currData, page) => {
    let argsList = [api, query(this.state.search), perPage];
    if (page > 1) {
      argsList.push('page=' + (page + 1));
    }

    const url = requestUrl(...argsList);

    getJSON(url).then(result => {
      currData = currData.concat(Data.fromGithubRes(result.items));
      const currPage = page + 1;

      this.setState({
        data: currData,
        page: currPage,
      });
    });
  };

  onInput = e => {
    const inputVal = e.target.value;

    this.setState({
      search: inputVal,
    });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  onKeyPress = event => {
    if (event.key == 'Enter') {
      this.reloadData();
    }
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit} noValidate>
          <TextInput
            aria-label="Search for repositories"
            required
            type="text"
            onChange={this.onInput}
            value={this.state.search}
            onKeyPress={this.onKeyPress}
          />
          <ButtonIcon onClick={this.reloadData}>
            <Img src="./assets/img/search.svg" alt="Search" />
          </ButtonIcon>
        </Form>
        <ViewSingle
          data={this.state.data}
          loadData={this.loadData}
          save={this.props.save}
          saved={this.props.saved}
        />
      </>
    );
  }
}
