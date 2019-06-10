import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './footer';
import Header from './header';
import Nav from './nav';

import Home from '../routes/home';
import Search from '../routes/search';
import Saved from '../routes/saved';

import { Main, GlobalStyle } from './styles';
import { dark, light } from './theme';
import { ThemeProvider } from 'styled-components';

const links = [['Search', '/search'], ['Saved', '/saved']];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMenu: true,
      theme: light,
    };
  }

  toggleMenu = () => {
    this.setState({
      hideMenu: !this.state.hideMenu,
    });
  };

  switchTheme = () => {
    this.setState({
      theme: this.state.theme === light ? dark : light,
    });
  };

  render() {
    return (
      <Router>
        <ThemeProvider theme={this.state.theme}>
          <>
            <Header
              link="/"
              title="GH Trends"
              toggle={this.toggleMenu}
              hide={this.state.hideMenu}
              switchTheme={this.switchTheme}
            />
            <Nav
              links={links}
              hide={this.state.hideMenu}
              linkClick={this.toggleMenu}
            />
            <Main>
              <Route path="/search" component={Search} />
              <Route path="/saved" component={Saved} />
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
            </Main>
            <Footer />
            <GlobalStyle />
          </>
        </ThemeProvider>
      </Router>
    );
  }
}
