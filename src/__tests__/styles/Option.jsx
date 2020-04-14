import React from 'react';
import { shallow } from 'enzyme';
import Option from '../../styles/Option';
import 'jest-styled-components';

it('renders default <Option/>', () => {
  const wrapper = shallow(<Option />);
  expect(wrapper).toMatchSnapshot();
});
