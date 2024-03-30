import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
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
    const component = renderer.create(<Article />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders with theme`, () => {
    const component = renderer.create(<Article theme={dark} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
