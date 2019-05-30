import React, { Component } from "react";
import { MenuToggle } from "./nav";
import { Header as StyledHeader, HeaderTitle, Link } from "./styles";

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <HeaderTitle>
          <Link to={this.props.link} fontSize="2rem">
            {this.props.title}
          </Link>
        </HeaderTitle>
        <MenuToggle toggle={this.props.toggle} open={!this.props.hide} />
      </StyledHeader>
    );
  }
}
