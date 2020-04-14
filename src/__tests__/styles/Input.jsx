import React from 'react';
import { shallow, mount } from 'enzyme';
import TextInput, { InputRadio } from '../../styles/Input';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<TextInput />', () => {
  it('renders default', () => {
    const wrapper = mount(<TextInput />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<TextInput theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('renders default <InputRadio />', () => {
  const wrapper = shallow(<InputRadio />);
  expect(wrapper).toMatchSnapshot();
});
