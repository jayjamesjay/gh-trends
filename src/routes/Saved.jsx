import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from '../components/View';
import { Categories } from '../components/Tabs';
import { H1Alt } from '../styles/Headers';
import { ImgIcon } from '../styles/Img';
import { DownloadLink, jsonToMarkdown, RepoInfo } from '../components/Data';

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
        active === 'JSON' ? (
          <DownloadLink
            filename="saved.json"
            content={JSON.stringify(data)}
            dataType="json"
            display={imgDownload}
          />
        ) : (
          <DownloadLink filename="saved.md" content={jsonToMarkdown(data)} display={imgDownload} />
        );

      content = (
        <>
          <header>
            <H1Alt>Saved repositories</H1Alt>
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
