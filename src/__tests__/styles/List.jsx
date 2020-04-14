import React from 'react';
import { shallow, mount } from 'enzyme';
import { List, ListItem, Menu } from '../../styles/List';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

it('renders default <List />', () => {
  const wrapper = shallow(<List />);
  expect(wrapper).toMatchSnapshot();
});

describe('<ListItem />', () => {
  it('renders default', () => {
    const wrapper = mount(<ListItem />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<ListItem theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('renders default <Menu />', () => {
  const wrapper = shallow(<Menu />);
  expect(wrapper).toMatchSnapshot();
});
