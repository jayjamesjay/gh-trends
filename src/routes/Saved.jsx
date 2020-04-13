import React from 'react';
import PropTypes from 'prop-types';
import View from '../components/View';
import Categories from '../components/Categories';
import { H1 } from '../styles/Headers';
import { ImgIcon } from '../styles/Img';
import { Bar } from '../styles/Main';
import { DownloadLink, jsonToMarkdown } from '../components/Data';
import RepoInfo from '../components/RepoInfo';
import { ButtonRemove } from '../styles/Button';

export default function Saved({ data, save, removeAll }) {
  const [active, setActive] = React.useState('JSON');
  const imgDownload = <ImgIcon src="./assets/img/download.svg" alt="Download saved items" />;
  let content;

  if (data.length > 0) {
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
          <H1>Saved repositories</H1>
        </header>
        <section>
          <Bar>
            {link}
            <ButtonRemove onClick={removeAll}>
              <ImgIcon src="./assets/img/remove-all.svg" alt="Remove all" />
            </ButtonRemove>
          </Bar>
          <Categories labels={['JSON', 'Markdown']} active={active} onClick={setActive} />
          <View data={data} save={save} saved={data} />
        </section>
      </>
    );
  } else {
    content = <H1>You haven&apos;t saved any repos...</H1>;
  }

  return content;
}

Saved.propTypes = {
  save: PropTypes.func.isRequired,
  removeAll: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired
};
