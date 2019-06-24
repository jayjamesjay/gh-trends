import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { languages as colors, RepoInfo } from './Data';
import { TextBlock } from '../styles/Main';
import Article from '../styles/Article';
import Span from '../styles/Span';
import { H2 } from '../styles/Headers';
import { Img, ImgInline } from '../styles/Img';
import { P, PAlt, PClean } from '../styles/Paragraph';
import { ButtonAdd } from '../styles/Button';
import { LinkA } from '../styles/Link';

export default class InfoBlock extends Component {
  save = () => {
    const { info, save } = this.props;
    save(info);
  };

  render() {
    const {
      props: { info, saved },
      save
    } = this;
    const [author, name] = info.nameWithOwner.split('/');
    const { language, stargazersCount } = info;
    const license = info.license ? `License: ${info.license}` : '';
    let color;

    if (Object.prototype.hasOwnProperty.call(colors, language)) {
      color = colors[language];
    } else {
      color = null;
    }

    return (
      <Article bg={color}>
        <H2>
          <LinkA href={info.url}>
            <Span>{author}</Span>
            {' '}
/
            {name}
          </LinkA>
        </H2>
        <P>{info.description}</P>
        <PClean>
          Forks:
          {info.forks}
        </PClean>
        <PClean>{license}</PClean>
        <ButtonAdd onClick={save}>
          {saved ? (
            <Img src="./assets/img/delete.svg" alt="Remove from saved" title="Remove from saved" />
          ) : (
            <Img src="./assets/img/add-saved.svg" alt="Add to saved" title="Add to saved" />
          )}
        </ButtonAdd>
        <TextBlock>
          <PAlt>
            {stargazersCount}
            <ImgInline src="./assets/img/stars.svg" alt="Stars" />
          </PAlt>
          <PAlt>{language}</PAlt>
        </TextBlock>
      </Article>
    );
  }
}

InfoBlock.propTypes = {
  saved: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
  info: PropTypes.instanceOf(RepoInfo).isRequired
};
