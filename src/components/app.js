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
      saved: [],
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

  save = elem => {
    const currSaved = this.state.saved.slice();
    const shouldBeAdded = currSaved.indexOf(elem) < 0 ? true : false;

    if (shouldBeAdded) {
      currSaved.push(elem);

      this.setState({
        saved: currSaved,
      });
    }
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
              <Route
                path="/search"
                render={() => <Search save={this.save} />}
              />
              <Route
                path="/saved"
                render={() => (
                  <Saved data={this.state.saved} save={this.save} />
                )}
              />
              <Route exact path="/" render={() => <Home save={this.save} />} />
              <Route path="/home" render={() => <Home save={this.save} />} />
            </Main>
            <Footer />
            <GlobalStyle />
          </>
        </ThemeProvider>
      </Router>
    );
  }
}
