import React, { Component } from 'react';
import { View } from '../components/main';
import { H1Alt, ImgIcon } from '../components/styles';
import { createLink } from '../components/data';

export default class Saved extends Component {
  render() {
    const { data } = this.props;
    let content;

    if (data.length > 0) {
      const imgDownload = (
        <ImgIcon src="./assets/img/download.svg" alt="Download saved items" />
      );

      content = (
        <>
          <H1Alt>Saved repos</H1Alt>
          {createLink('saved.json', JSON.stringify(data), 'json', imgDownload)}
          <View data={data} save={this.props.save} />
        </>
      );
    } else {
      content = <H1Alt>You haven't saved any repos...</H1Alt>;
    }

    return content;
  }
}
