import React from 'react';
import PropTypes from 'prop-types';
import { MenuToggle } from './nav';
import StyledHeader from '../styles/headers';
import { HeaderLink } from '../styles/link';
import { Img } from '../styles/img';
import { ButtonTheme } from '../styles/button';

export default function Header(props) {
  const { link, title, switchTheme, hide, toggle } = props;

  return (
    <StyledHeader>
      <HeaderLink to={link}>{title}</HeaderLink>
      <ButtonTheme onClick={switchTheme}>
        <Img src="./assets/img/dark-mode.svg" alt="Switch between dark and light mode" />
      </ButtonTheme>
      <MenuToggle toggle={toggle} open={!hide} />
    </StyledHeader>
  );
}

Header.propTypes = {
  hide: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  switchTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
