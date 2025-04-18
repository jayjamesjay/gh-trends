import React from 'react';
import PropTypes from 'prop-types';

import { MenuToggle } from './Nav';
import StyledHeader from '../styles/Headers';
import { HeaderLink } from '../styles/Link';
import { Img } from '../styles/Img';
import { ButtonTheme } from '../styles/Button';
import SwitchThemeImg from '../assets/img/dark-mode.svg';

/**
 * @module Header
 */

/**
 * Header of the website
 *
 * @property {string} link - URL pointing to Home Page
 * @property {string} title - displayed text
 * @property {function} switchTheme - switches theme (dark/light)
 * @property {boolean} hide - is nav hidden
 * @property {function} toggle - function called when MenuToggle is clicked
 * @returns {Header}
 */
export default function Header({ link, title, switchTheme, $hide, toggle }) {
  return (
    <StyledHeader>
      <HeaderLink to={link}>{title}</HeaderLink>
      <ButtonTheme onClick={switchTheme}>
        <Img src={SwitchThemeImg} alt="Toggle dark/light mode" />
      </ButtonTheme>
      <MenuToggle toggle={toggle} $open={!$hide} />
    </StyledHeader>
  );
}

Header.propTypes = {
  $hide: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  switchTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
