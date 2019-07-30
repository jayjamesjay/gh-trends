import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

import Home from '../routes/Home';
import Search from '../routes/Search';
import Saved from '../routes/Saved';

import GlobalStyle from '../styles/Global';
import { Main } from '../styles/Main';
import { dark, light } from '../styles/Theme';

const links = [['Search', '/search'], ['Saved', '/saved']];

export default function App() {
  const [hideMenu, setMenu] = React.useState(true);
  const [theme, setTheme] = React.useState(light);
  const [saved, setSaved] = React.useState([]);

  function toggleMenu() {
    setMenu(!hideMenu);
  }

  function switchTheme() {
    setTheme(theme => (theme === light ? dark : light));
  }

  function save(elem) {
    let currSaved = saved.slice();

    if (currSaved.findIndex(item => item.nameWithOwner === elem.nameWithOwner) < 0) {
      currSaved.push(elem);
    } else {
      currSaved = currSaved.filter(item => item.nameWithOwner !== elem.nameWithOwner);
    }

    setSaved(currSaved);
  }

  function removeAll() {
    setSaved([]);
  }

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
            <Route
              path="/saved"
              render={() => <Saved data={saved} save={save} removeAll={removeAll} />}
            />
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
