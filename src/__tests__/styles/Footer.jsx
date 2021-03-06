import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../styles/Footer';
import 'jest-styled-components';

test('renders default <Footer />', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
