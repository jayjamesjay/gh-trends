import React from 'react';
import PropTypes from 'prop-types';
import { MenuToggle as StyledToggle } from '../styles/Button';
import { Menu } from '../styles/List';
import { Link } from '../styles/Link';
import StyledNav from '../styles/Nav';

export function MenuToggle({ toggle, open }) {
  return (
    <StyledToggle aria-label="Open menu" onClick={toggle} open={open}>
      <span />
      <span />
      <span />
    </StyledToggle>
  );
}

MenuToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default function Nav({ hide, links, linkClick }) {
  return (
    <StyledNav hide={hide}>
      <Menu>
        {links.map(link => (
          <ListItemLink click={linkClick} key={link[0]} title={link[0]} link={link[1]} />
        ))}
      </Menu>
    </StyledNav>
  );
}

Nav.propTypes = {
  hide: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  linkClick: PropTypes.func.isRequired
};

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
  link: PropTypes.string.isRequired
};
