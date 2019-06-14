import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from './footer';
import Header from './header';
import Nav from './nav';

import Home from '../routes/home';
import Search from '../routes/search';
import Saved from '../routes/saved';

import GlobalStyle from '../styles/global';
import { Main } from '../styles/main';
import { dark, light } from '../styles/theme';

const links = [['Search', '/search'], ['Saved', '/saved']];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMenu: true,
      theme: light,
      saved: []
    };
  }

  toggleMenu = () => {
    const { hideMenu } = this.state;
    this.setState({
      hideMenu: !hideMenu
    });
  };

  switchTheme = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === light ? dark : light
    });
  };

  save = elem => {
    const { saved } = this.state;
    let currSaved = saved;

    if (currSaved.findIndex(item => item.nameWithOwner === elem.nameWithOwner) < 0) {
      currSaved.push(elem);

      this.setState({
        saved: currSaved
      });
    } else {
      currSaved = currSaved.filter(item => item.nameWithOwner !== elem.nameWithOwner);

      this.setState({
        saved: currSaved
      });
    }
  };

  render() {
    const {
      state: { hideMenu, theme, saved },
      toggleMenu,
      switchTheme,
      save
    } = this;

    return (
      <Router>
        <ThemeProvider theme={theme}>
          <>
            <Header
              link="/"
              title="GH Trends"
              toggle={toggleMenu}
              hide={hideMenu}
              switchTheme={switchTheme}
            />
            <Nav links={links} hide={hideMenu} linkClick={toggleMenu} />
            <Main>
              <Route path="/search" render={() => <Search save={save} saved={saved} />} />
              <Route path="/saved" render={() => <Saved data={saved} save={save} />} />
              <Route exact path="/" render={() => <Home save={save} saved={saved} />} />
              <Route path="/home" render={() => <Home save={save} saved={saved} />} />
            </Main>
            <Footer />
            <GlobalStyle />
          </>
        </ThemeProvider>
      </Router>
    );
  }
}
