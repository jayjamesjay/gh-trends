import React from 'react';
import PropTypes from 'prop-types';
import { MenuToggle as StyledToggle } from '../styles/button';
import { Menu } from '../styles/list';
import { Link } from '../styles/link';
import StyledNav from '../styles/nav';

export function MenuToggle(props) {
  const { toggle, open } = props;
  return (
    <StyledToggle aria-label="Open menu" onClick={toggle} open={open}>
      <span />
      <span />
      <span />
    </StyledToggle>
  );
}

export default function Nav(props) {
  const { hide, links, linkClick } = props;
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

export function ListItemLink(props) {
  const { click, link, title } = props;
  return (
    <li>
      <Link onClick={click} to={link}>
        {title}
      </Link>
    </li>
  );
}

MenuToggle.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

Nav.propTypes = {
  hide: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  linkClick: PropTypes.func.isRequired
};

ListItemLink.propTypes = {
  click: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
