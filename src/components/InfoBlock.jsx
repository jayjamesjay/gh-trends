import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import RepoInfo from '../utils/RepoInfo';
import { languages as colors } from './Data';
import { BottomBar } from '../styles/Main';
import Article from '../styles/Article';
import Span from '../styles/Span';
import { H2 } from '../styles/Headers';
import { Img, ImgInline } from '../styles/Img';
import { PFlex, PClean } from '../styles/Paragraph';
import { ButtonAdd } from '../styles/Button';
import { LinkA } from '../styles/Link';
import DeleteImg from '../assets/img/delete.svg';
import SaveImg from '../assets/img/add-saved.svg';
import StarsImg from '../assets/img/stars.svg';

/**
 * @module InfoBlock
 */

/**
 * Block of information about repository with an indicator if it was saved
 *
 * @property {object} info - information about repository
 * @property {function} save - saves repository
 * @property {array} saved - information about repositories which has been saved
 * @returns {InfoBlock}
 */
export default function InfoBlock({ info, save, saved }) {
  const { language, stargazersCount } = info;
  const langStr = language ? `Language: ${language}` : '';
  const license = info.license ? `License: ${info.license}` : '';
  const forks = `Forks: ${info.forks}`;
  let color;

  const saveItem = useCallback(() => save(info), [save, info]);

  if (Object.prototype.hasOwnProperty.call(colors, language)) {
    color = colors[language];
  } else {
    color = null;
  }

  return (
    <Article $bg={color}>
      <H2>
        <RepoLink url={info.url} nameWithOwner={info.nameWithOwner} />
      </H2>
      <p>{info.description}</p>
      <BottomBar>
        <SaveRepo save={saveItem} saved={saved} />
        <PClean>{forks}</PClean>
        <PClean>{license}</PClean>
        <PFlex>
          {stargazersCount}
          <ImgInline src={StarsImg} alt="Stars" />
        </PFlex>
        <PClean>{langStr}</PClean>
      </BottomBar>
    </Article>
  );
}

InfoBlock.propTypes = {
  saved: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
  info: PropTypes.instanceOf(RepoInfo).isRequired,
};

/**
 * Link to repository
 *
 * @property {string} url - link to this repository
 * @property {string} nameWithOwner - auth and name of this repository
 * @returns {RepoLink}
 */
export function RepoLink({ url, nameWithOwner }) {
  const [author, name] = nameWithOwner.split('/');

  return (
    <LinkA href={url}>
      <Span>{author}</Span>
      {' /'}
      {name}
    </LinkA>
  );
}

RepoLink.propTypes = {
  url: PropTypes.string.isRequired,
  nameWithOwner: PropTypes.string.isRequired,
};

/**
 * Button to add/remove repository from saved
 *
 * @property {function} save - saves repository
 * @property {boolean} saved - is this repository saved
 * @returns {SaveRepo}
 */
export function SaveRepo({ save, saved }) {
  return (
    <ButtonAdd onClick={save}>
      {saved ? (
        <Img src={DeleteImg} alt="Remove from saved" title="Remove from saved" />
      ) : (
        <Img src={SaveImg} alt="Add to saved" title="Add to saved" />
      )}
    </ButtonAdd>
  );
}

SaveRepo.propTypes = {
  saved: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
};
