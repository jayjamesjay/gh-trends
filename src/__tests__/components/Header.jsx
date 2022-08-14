import React from 'react';
import 'jest-styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('<Header />', () => {
  const title = 'GH Trends';
  const func = () => {};

  it(`renders with default style`, () => {
    const component = renderer.create(
      <Router>
        <Header link="" title={title} switchTheme={func} hide={false} toggle={func} />
      </Router>
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with title', () => {
    render(
      <Router>
        <Header link="" title={title} switchTheme={func} hide={false} toggle={func} />
      </Router>
    );

    expect(screen.getByRole('link').textContent).toEqual(title);
  });
});
