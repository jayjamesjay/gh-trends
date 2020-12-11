import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  Button,
  ButtonMain,
  ButtonIcon,
  ButtonRemove,
  ButtonTheme,
  ButtonAdd,
  MenuToggle,
  ToggleSpan,
} from '../../styles/Button';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Button />', () => {
  it('renders default', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = shallow(<Button theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ButtonMain />', () => {
  it('renders default', () => {
    const wrapper = shallow(<ButtonMain />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = shallow(<ButtonMain theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders visible', () => {
    const wrapper = mount(<ButtonMain visible />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders hidden', () => {
    const wrapper = mount(<ButtonMain visible={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ToggleSpan />', () => {
  it('renders default', () => {
    const wrapper = mount(<ToggleSpan />);
    expect(wrapper).toMatchSnapshot();
  });

  it('open/close', () => {
    const wrapper = mount(<ToggleSpan open={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<ToggleSpan theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('renders default <MenuToggle />', () => {
  const wrapper = shallow(<MenuToggle />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <ButtonTheme />', () => {
  const wrapper = shallow(<ButtonTheme />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <ButtonIcon />', () => {
  const wrapper = shallow(<ButtonIcon />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <ButtonRemove />', () => {
  const wrapper = shallow(<ButtonRemove />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <ButtonAdd />', () => {
  const wrapper = shallow(<ButtonAdd />);
  expect(wrapper).toMatchSnapshot();
});
