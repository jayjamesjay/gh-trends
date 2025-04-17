import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Article, { oppositeBg } from '../../styles/Article';
import { light, dark } from '../../styles/Theme';

describe('oppositeBg', () => {
  it('with selected bg', () => {
    const props = {
      $bg: light.bg,
    };

    const bg = oppositeBg(props);
    expect(bg).toEqual(light.bg);
  });

  it('with no bg in props', () => {
    {
      const props = {
        theme: light,
      };

      const bg = oppositeBg(props);
      expect(bg).toEqual(light.color);
    }
    {
      const props = {
        theme: dark,
      };

      const bg = oppositeBg(props);
      expect(bg).toEqual(dark.color);
    }
  });
});

describe('<Article />', () => {
  it(`renders with default style`, () => {
    const { asFragment } = render(<Article />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`renders with theme`, () => {
    const { asFragment } = render(<Article theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
