import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { invertColor, Img, ImgIcon, ImgInline } from '../../styles/Img';
import { light, dark } from '../../styles/Theme';

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
    const component = renderer.create(<Img />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const component = renderer.create(<Img theme={dark} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it('renders default <ImgIcon />', () => {
  const component = renderer.create(<ImgIcon />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

describe('<ImgInline />', () => {
  it('renders default', () => {
    const component = renderer.create(<ImgInline />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const component = renderer.create(<ImgInline theme={dark} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
