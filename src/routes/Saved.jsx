import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import View from '../components/View';
import Categories from '../components/Categories';
import { H1 } from '../styles/Headers';
import { ImgIcon } from '../styles/Img';
import { Bar } from '../styles/Main';
import { DownloadLink, jsonToMarkdown } from '../components/Data';
import RepoInfo from '../components/RepoInfo';
import { ButtonRemove } from '../styles/Button';
import { save, removeAllSaved } from '../actions';

const mapStateToProps = state => {
  return {
    saved: state.saved
  };
};

const mapDispatchToProps = { removeAllSaved, save };

// eslint-disable-next-line no-shadow
export function Saved({ saved, save, removeAllSaved }) {
  const [active, setActive] = React.useState('JSON');
  const imgDownload = <ImgIcon src="./assets/img/download.svg" alt="Download saved items" />;
  let content;

  if (saved.length > 0) {
    const link =
      active === 'JSON' ? (
        <DownloadLink
          filename="saved.json"
          content={JSON.stringify(saved)}
          dataType="json"
          display={imgDownload}
        />
      ) : (
        <DownloadLink filename="saved.md" content={jsonToMarkdown(saved)} display={imgDownload} />
      );

    content = (
      <>
        <header>
          <H1>Saved repositories</H1>
        </header>
        <section>
          <Bar>
            {link}
            <ButtonRemove onClick={removeAllSaved}>
              <ImgIcon src="./assets/img/remove-all.svg" alt="Remove all" />
            </ButtonRemove>
          </Bar>
          <Categories labels={['JSON', 'Markdown']} active={active} onClick={setActive} />
          <View data={saved} save={save} saved={saved} />
        </section>
      </>
    );
  } else {
    content = <H1>You haven&apos;t saved any repos...</H1>;
  }

  return content;
}

Saved.propTypes = {
  saved: PropTypes.arrayOf(PropTypes.instanceOf(RepoInfo)).isRequired,
  removeAllSaved: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired
};

const SavedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Saved);

export default SavedContainer;
