import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, LinkA, HeaderLink } from '../../styles/Link';
import { dark } from '../../styles/Theme';

describe('<Link />', () => {
  it('renders default', () => {
    const { asFragment } = render(
      <Router>
        <Link to="/" />
      </Router>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(
      <Router>
        <Link theme={dark} to="/" />
      </Router>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

it('renders default <HeaderLink />', () => {
  const { asFragment } = render(
    <Router>
      <HeaderLink to="/" />
    </Router>,
  );

  expect(asFragment()).toMatchSnapshot();
});

describe('<LinkA />', () => {
  it('renders default', () => {
    const { asFragment } = render(<LinkA />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(<LinkA theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
