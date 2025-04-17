import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
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
    const { asFragment } = render(<Img />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(<Img theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it('renders default <ImgIcon />', () => {
  const { asFragment } = render(<ImgIcon />);
  expect(asFragment()).toMatchSnapshot();
});

describe('<ImgInline />', () => {
  it('renders default', () => {
    const { asFragment } = render(<ImgInline />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(<ImgInline theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
