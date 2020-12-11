import React from 'react';
import { shallow, mount } from 'enzyme';
import { invertColor, Img, ImgIcon, ImgInline } from '../../styles/Img';
import { light, dark } from '../../styles/Theme';
import 'jest-styled-components';

it('inverts color of icon', () => {
  {
    const props = {
      theme: light,
    };
    const invert = invertColor(props);
    expect(invert).toBe('invert(0%)');
  }

  {
    const props = {
      theme: dark,
    };
    const invert = invertColor(props);
    expect(invert).toBe('invert(100%)');
  }
});

describe('<Img />', () => {
  it('renders default', () => {
    const wrapper = mount(<Img />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<Img theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('renders default <ImgIcon />', () => {
  const wrapper = shallow(<ImgIcon />);
  expect(wrapper).toMatchSnapshot();
});

describe('<ImgInline />', () => {
  it('renders default', () => {
    const wrapper = mount(<ImgInline />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<ImgInline theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
