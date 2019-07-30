import React from 'react';
import PropTypes from 'prop-types';
import { languages as colors, RepoInfo } from './Data';
import { BottomBar } from '../styles/Main';
import Article from '../styles/Article';
import Span from '../styles/Span';
import { H2 } from '../styles/Headers';
import { Img, ImgInline } from '../styles/Img';
import { PFlex, PClean } from '../styles/Paragraph';
import { ButtonAdd } from '../styles/Button';
import { LinkA } from '../styles/Link';

// Block of information about repository with an indicator if it was saved
export default function InfoBlock({ info, save, saved }) {
  const { language, stargazersCount } = info;
  const langStr = language ? `Language: ${language}` : '';
  const license = info.license ? `License: ${info.license}` : '';
  const forks = `Forks: ${info.forks}`;
  let color;

  const saveItem = () => save(info);

  if (Object.prototype.hasOwnProperty.call(colors, language)) {
    color = colors[language];
  } else {
    color = null;
  }

  return (
    <Article bg={color}>
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
          <ImgInline src="./assets/img/stars.svg" alt="Stars" />
        </PFlex>
        <PClean>{langStr}</PClean>
      </BottomBar>
    </Article>
  );
}

InfoBlock.propTypes = {
  saved: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
  info: PropTypes.instanceOf(RepoInfo).isRequired
};

// Llink to repository
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
  nameWithOwner: PropTypes.string.isRequired
};

// Button to add/remove repository from saved
export function SaveRepo({ save, saved }) {
  return (
    <ButtonAdd onClick={save}>
      {saved ? (
        <Img src="./assets/img/delete.svg" alt="Remove from saved" title="Remove from saved" />
      ) : (
        <Img src="./assets/img/add-saved.svg" alt="Add to saved" title="Add to saved" />
      )}
    </ButtonAdd>
  );
}

SaveRepo.propTypes = {
  saved: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired
};
