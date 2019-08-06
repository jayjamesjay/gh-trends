import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import { identicalItems } from './Data';

import Home from '../routes/Home';
import Search from '../routes/Search';
import Saved from '../routes/Saved';

import GlobalStyle from '../styles/Global';
import { Main } from '../styles/Main';
import { dark, light } from '../styles/Theme';

const links = [['Search', '/search'], ['Saved', '/saved']];

/**
 * @module App
 */

/**
 * Main App component
 *
 * @returns {App}
 */
export default function App() {
  const [hideMenu, setMenu] = React.useState(true);
  const [theme, setTheme] = React.useState(light);
  const [saved, setSaved] = React.useState([]);

  const toggleMenu = useCallback(() => setMenu(!hideMenu), [hideMenu]);
  const switchTheme = useCallback(() => setTheme(curr => (curr === light ? dark : light)), []);
  const removeAll = useCallback(() => setSaved([]), []);

  const save = useCallback(
    elem => {
      let currSaved = saved.slice();

      if (currSaved.findIndex(item => identicalItems(item, elem)) < 0) {
        currSaved.push(elem);
      } else {
        currSaved = currSaved.filter(item => !identicalItems(item, elem));
      }

      setSaved(currSaved);
    },
    [saved]
  );

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
