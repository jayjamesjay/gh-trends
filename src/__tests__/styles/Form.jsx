import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Form, { FormAlt, CategoryMenu } from '../../styles/Form';
import 'jest-styled-components';

it('renders default <Form />', () => {
  const component = renderer.create(<Form />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders default <FormAlt />', () => {
  const component = renderer.create(<FormAlt />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders default <CategoryMenu />', () => {
  const component = renderer.create(<CategoryMenu />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
