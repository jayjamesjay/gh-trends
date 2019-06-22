import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from '../components/View';
import { Categories } from '../components/Tabs';
import { H1Alt } from '../styles/Headers';
import { ImgIcon } from '../styles/Img';
import { createLink, jsonToMarkdown, RepoInfo } from '../components/Data';

export default class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'JSON'
    };
  }

  onClick = label => {
    this.setState({ active: label });
  };

  render() {
    const {
      props: { data, save },
      onClick,
      state: { active }
    } = this;
    let content;

    if (data.length > 0) {
      const imgDownload = <ImgIcon src="./assets/img/download.svg" alt="Download saved items" />;

      const link =
        active === 'JSON'
          ? createLink('saved.json', JSON.stringify(data), 'json', imgDownload)
          : createLink('saved.md', jsonToMarkdown(data), 'plain', imgDownload);

      content = (
        <>
          <header>
            <H1Alt>Saved repos</H1Alt>
          </header>
          <section>
            {link}
            <Categories labels={['JSON', 'Markdown']} active={active} onClick={onClick} />
          </section>
          <View data={data} save={save} saved={data} />
        </>
      );
    } else {
      content = <H1Alt>You haven&apos;t saved any repos...</H1Alt>;
    }

    return content;
  }
}

Saved.propTypes = {
  save: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
