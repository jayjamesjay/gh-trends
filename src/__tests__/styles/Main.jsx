import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Main, Content, Bar, BottomBar } from '../../styles/Main';

it('renders default <Main />', () => {
  const { asFragment } = render(<Main />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders default <Content />', () => {
  const { asFragment } = render(<Content />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders default <Bar />', () => {
  const { asFragment } = render(<Bar />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders default <BottomBar />', () => {
  const { asFragment } = render(<BottomBar />);
  expect(asFragment()).toMatchSnapshot();
});
