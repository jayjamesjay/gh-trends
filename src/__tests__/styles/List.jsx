import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { List, ListItem, Menu } from '../../styles/List';
import { dark } from '../../styles/Theme';

it('renders default <List />', () => {
  const component = renderer.create(<List />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

describe('<ListItem />', () => {
  it('renders default', () => {
    const component = renderer.create(<ListItem />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const component = renderer.create(<ListItem theme={dark} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it('renders default <Menu />', () => {
  const component = renderer.create(<Menu />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
