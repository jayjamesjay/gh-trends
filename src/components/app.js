import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";

import Home from "../routes/home";
import AllTime from "../routes/all-time";
import Explore from "../routes/explore";

import { Main, GlobalStyle } from "./styles";
import { dark, light } from "./theme";
import { ThemeProvider } from "styled-components";

const links = [["All Time", "/all-time"], ["Explore", "/explore"]];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMenu: true
    };
  }

  toggleMenu = () => {
    this.setState({
      hideMenu: !this.state.hideMenu
    });
  };

  render() {
    return (
      <Router>
        <ThemeProvider theme={light}>
          <>
            <Header
              link="/"
              title="GH Trends"
              toggle={this.toggleMenu}
              hide={this.state.hideMenu}
            />
            <Nav
              links={links}
              hide={this.state.hideMenu}
              linkClick={this.toggleMenu}
            />
            <Main>
              <Route path="/all-time" component={AllTime} />
              <Route path="/explore" component={Explore} />
              <Route exact path="/" component={Home} />
            </Main>
            <Footer />
            <GlobalStyle />
          </>
        </ThemeProvider>
      </Router>
    );
  }
}
