import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, LinkA, HeaderLink } from '../../styles/Link';
import { dark } from '../../styles/Theme';

describe('<Link />', () => {
  it('renders default', () => {
    const component = renderer.create(
      <Router>
        <Link to="/" />
      </Router>
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const component = renderer.create(
      <Router>
        <Link theme={dark} to="/" />
      </Router>
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it('renders default <HeaderLink />', () => {
  const component = renderer.create(
    <Router>
      <HeaderLink to="/" />
    </Router>
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

describe('<LinkA />', () => {
  it('renders default', () => {
    const component = renderer.create(<LinkA />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const component = renderer.create(<LinkA theme={dark} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
