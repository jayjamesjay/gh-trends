import React, { Component } from 'react';
import { MenuToggle } from './nav';
import { Header as StyledHeader } from '../styles/headers';
import { HeaderLink } from '../styles/link';
import { Img } from '../styles/img';
import { ButtonTheme } from '../styles/button';

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <HeaderLink to={this.props.link}>{this.props.title}</HeaderLink>
        <ButtonTheme onClick={this.props.switchTheme}>
          <Img
            src="./assets/img/dark-mode.svg"
            alt="Switch between dark and light mode"
          />
        </ButtonTheme>
        <MenuToggle toggle={this.props.toggle} open={!this.props.hide} />
      </StyledHeader>
    );
  }
}
