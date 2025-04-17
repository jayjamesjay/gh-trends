import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { List, ListItem, Menu } from '../../styles/List';
import { dark } from '../../styles/Theme';

it('renders default <List />', () => {
  const { asFragment } = render(<List />);
  expect(asFragment()).toMatchSnapshot();
});

describe('<ListItem />', () => {
  it('renders default', () => {
    const { asFragment } = render(<ListItem />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(<ListItem theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it('renders default <Menu />', () => {
  const { asFragment } = render(<Menu />);
  expect(asFragment()).toMatchSnapshot();
});
