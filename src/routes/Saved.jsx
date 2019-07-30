import React from 'react';
import PropTypes from 'prop-types';
import View from '../components/View';
import { Categories } from '../components/Tabs';
import { H1Alt } from '../styles/Headers';
import { ImgIcon } from '../styles/Img';
import { Bar } from '../styles/Main';
import { DownloadLink, jsonToMarkdown, RepoInfo } from '../components/Data';
import { ButtonRemove } from '../styles/Button';

export default function Saved({ data, save, removeAll }) {
  const [active, setActive] = 'JSON';
  let content;

  function onClick(label) {
    setActive(label);
  }

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
          <Bar>
            {link}
            <ButtonRemove onClick={removeAll}>
              <ImgIcon src="./assets/img/remove-all.svg" alt="Remove all" />
            </ButtonRemove>
          </Bar>
          <Categories labels={['JSON', 'Markdown']} active={active} onClick={onClick} />
          <View data={data} save={save} saved={data} />
        </section>
      </>
    );
  } else {
    content = <H1Alt>You haven&apos;t saved any repos...</H1Alt>;
  }

  return content;
}

Saved.propTypes = {
  save: PropTypes.func.isRequired,
  removeAll: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
