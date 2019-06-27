import React from 'react';
import PropTypes from 'prop-types';
import { MenuToggle } from './Nav';
import StyledHeader from '../styles/Headers';
import { HeaderLink } from '../styles/Link';
import { Img } from '../styles/Img';
import { ButtonTheme } from '../styles/Button';

// Header of the website
export default function Header({ link, title, switchTheme, hide, toggle }) {
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
