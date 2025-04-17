import React from 'react';
import { render } from '@testing-library/react';
import Form, { FormAlt, CategoryMenu } from '../../styles/Form';
import 'jest-styled-components';

it('renders default <Form />', () => {
  const { asFragment } = render(<Form />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders default <FormAlt />', () => {
  const { asFragment } = render(<FormAlt />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders default <CategoryMenu />', () => {
  const { asFragment } = render(<CategoryMenu />);
  expect(asFragment()).toMatchSnapshot();
});
