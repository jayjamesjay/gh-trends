import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { Main, Content, Bar, BottomBar } from '../../styles/Main';

it('renders default <Main />', () => {
  const component = renderer.create(<Main />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders default <Content />', () => {
  const component = renderer.create(<Content />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders default <Bar />', () => {
  const component = renderer.create(<Bar />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders default <BottomBar />', () => {
  const component = renderer.create(<BottomBar />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
