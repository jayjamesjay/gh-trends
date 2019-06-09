import React, { Component } from 'react';
import { MenuToggle } from './nav';
import { Header as StyledHeader, HeaderLink } from './styles';

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <HeaderLink to={this.props.link}>{this.props.title}</HeaderLink>
        <MenuToggle toggle={this.props.toggle} open={!this.props.hide} />
      </StyledHeader>
    );
  }
}
