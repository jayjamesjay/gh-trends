import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from './data';
import { Article, Span, TextBlock } from '../styles/main';
import { H2 } from '../styles/headers';
import { Img, ImgInline } from '../styles/img';
import { P, PAlt, PClean } from '../styles/paragraph';
import { ButtonAdd } from '../styles/button';
import { LinkA } from '../styles/link';

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
      color = '#fff';
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
  info: PropTypes.object.isRequired
};
