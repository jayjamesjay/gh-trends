import React, { Component } from "react";
import {
  Menu,
  Link,
  Nav as StyledNav,
  MenuToggle as StyledToggle,
} from "./styles";

export class MenuToggle extends Component {
  render() {
    return (
      <StyledToggle
        aria-label="Open menu"
        onClick={this.props.toggle}
        open={this.props.open}
      >
        <span />
        <span />
        <span />
      </StyledToggle>
    );
  }
}

export default class Nav extends Component {
  render() {
    return (
      <StyledNav hide={this.props.hide}>
        <Menu>
          {this.props.links.map(link => (
            <ListItemLink
              click={this.props.linkClick}
              key={link[0]}
              title={link[0]}
              link={link[1]}
            />
          ))}
        </Menu>
      </StyledNav>
    );
  }
}

export class ListItemLink extends Component {
  render() {
    return (
      <li>
        <Link onClick={this.props.click} to={this.props.link}>
          {this.props.title}
        </Link>
      </li>
    );
  }
}
