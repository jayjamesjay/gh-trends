import React from 'react';
import PropTypes from 'prop-types';
import { MenuToggle as StyledToggle, ToggleSpan } from '../styles/Button';
import { Menu } from '../styles/List';
import { Link } from '../styles/Link';
import StyledNav from '../styles/Nav';

/**
 * @module Nav
 */

/**
 * Hamburger displayed on mobile devies to open/close menu
 *
 * @property {function} toggle - function fired when the button is clicked
 * @property {boolean} open - is menu open
 * @returns {MenuToggle}
 */
export function MenuToggle({ toggle, open }) {
  return (
    <StyledToggle aria-label="Open menu" onClick={toggle}>
      <ToggleSpan open={open} />
      <ToggleSpan open={open} />
      <ToggleSpan open={open} />
    </StyledToggle>
  );
}

MenuToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

/**
 * Main navigation of website
 *
 * @property {boolean} hide - is nav hidden
 * @property {array} links - navigation options
 * @property {function} linkClick - function fired when link is clicked
 * @returns {Nav}
 */
export default function Nav({ hide, links, linkClick }) {
  return (
    <StyledNav hide={hide}>
      <Menu>
        {links.map((link) => (
          <ListItemLink click={linkClick} key={link[0]} title={link[0]} link={link[1]} />
        ))}
      </Menu>
    </StyledNav>
  );
}

Nav.propTypes = {
  hide: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  linkClick: PropTypes.func.isRequired,
};

/**
 * List item with link inside
 *
 * @property {function} click - function fired when link is clicked
 * @property {string} link - address url points to
 * @property {string} title - displayed text
 * @returns {ListItemLink}
 */
export function ListItemLink({ click, link, title }) {
  return (
    <li>
      <Link onClick={click} to={link}>
        {title}
      </Link>
    </li>
  );
}

ListItemLink.propTypes = {
  click: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
