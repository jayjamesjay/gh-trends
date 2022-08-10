import React, { useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

import HomeContainer from '../routes/Home';
import SearchContainer from '../routes/Search';
import SavedContainer from '../routes/Saved';

import GlobalStyle from '../styles/Global';
import { Main } from '../styles/Main';
import { dark, light } from '../styles/Theme';
import store from '../store';

/**
 * @module App
 */

const links = [
  ['Search', '/search'],
  ['Saved', '/saved'],
];
const { localStorage } = window;
const initTheme = localStorage.getItem('theme') === JSON.stringify(light) ? light : dark;

/**
 * Main App component
 *
 * @returns {App}
 */
export default function App() {
  const [hideMenu, setMenu] = React.useState(true);
  const [theme, setTheme] = React.useState(initTheme);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  });

  const toggleMenu = useCallback(() => setMenu(!hideMenu), [hideMenu]);
  const switchTheme = useCallback(() => setTheme((curr) => (curr === light ? dark : light)), []);

  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header
            link="/"
            title="GH Trends"
            toggle={toggleMenu}
            hide={hideMenu}
            switchTheme={switchTheme}
          />
          <Nav links={links} hide={hideMenu} linkClick={toggleMenu} />
          <Main>
            <Routes>
              <Route path="/search" element={<SearchContainer />} />
              <Route path="/saved" element={<SavedContainer />} />
              <Route exact path="/" element={<HomeContainer />} />
              <Route path="/home" element={<HomeContainer />} />
            </Routes>
          </Main>
          <Footer />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </Router>
  );
}
