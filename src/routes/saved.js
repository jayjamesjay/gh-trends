import React, { Component } from 'react';
import { View, Categories } from '../components/main';
import { H1Alt } from '../styles/headers';
import { ImgIcon } from '../styles/img';
import { createLink, jsonToMarkdown } from '../components/data';

export default class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'JSON',
    };
  }

  onClick = label => {
    this.setState({ active: label });
  };

  render() {
    const { data } = this.props;
    let content;

    if (data.length > 0) {
      const imgDownload = (
        <ImgIcon src="./assets/img/download.svg" alt="Download saved items" />
      );

      const link =
        this.state.active === 'JSON'
          ? createLink('saved.json', JSON.stringify(data), 'json', imgDownload)
          : createLink('saved.md', jsonToMarkdown(data), 'plain', imgDownload);

      content = (
        <>
          <H1Alt>Saved repos</H1Alt>
          {link}
          <Categories
            labels={['JSON', 'Markdown']}
            active={this.state.active}
            onClick={this.onClick}
          />
          <View data={data} save={this.props.save} saved={data} />
        </>
      );
    } else {
      content = <H1Alt>You haven't saved any repos...</H1Alt>;
    }

    return content;
  }
}
