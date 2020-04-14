import React from 'react';
import { shallow } from 'enzyme';
import Form, { FormAlt, CategoryMenu } from '../../styles/Form';
import 'jest-styled-components';

it('renders default <Form />', () => {
  const wrapper = shallow(<Form />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <FormAlt />', () => {
  const wrapper = shallow(<FormAlt />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <CategoryMenu />', () => {
  const wrapper = shallow(<CategoryMenu />);
  expect(wrapper).toMatchSnapshot();
});
