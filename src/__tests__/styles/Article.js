import Article, { oppositeBg } from '../../styles/Article';
import { light, dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('oppositeBg', () => {
  it('with selected bg', () => {
    const props = {
      theme: light
    };

    const bg = oppositeBg(props);
    expect(bg).toEqual(light.color);
  });

  it('with no bg in props', () => {
    {
      const props = {
        theme: light
      };

      const bg = oppositeBg(props);
      expect(bg).toEqual(light.color);
    }
    {
      const props = {
        theme: dark
      };

      const bg = oppositeBg(props);
      expect(bg).toEqual(dark.color);
    }
  });
});

describe('<Article />', () => {
  it('renders with default background', () => {
    const article = mount(<Article />);

    expect(article).toHaveStyleRule(
      'background',
      'linear-gradient( #fff 0%,#fff 0.3rem,#000 0.3rem,#000 0.6rem,#fff 0.6rem )'
    );
  });

  it('renders with theme background', () => {
    const article = mount(<Article theme={dark} />);

    expect(article).toHaveStyleRule(
      'background',
      'linear-gradient( #202124 0%,#202124 0.3rem,#fff 0.3rem,#fff 0.6rem,#202124 0.6rem )'
    );
  });

  it('renders with custom background', () => {
    const article = mount(<Article bg="#fa5ccc" />);

    expect(article).toHaveStyleRule(
      'background',
      'linear-gradient( #fff 0%,#fff 0.3rem,#fa5ccc 0.3rem,#fa5ccc 0.6rem,#fff 0.6rem )'
    );
  });

  it('renders with default box-shadow', () => {
    const article = mount(<Article />);
    expect(article).toHaveStyleRule('box-shadow', light.shadow);
  });

  it('renders with theme box-shadow', () => {
    const article = mount(<Article theme={dark} />);
    expect(article).toHaveStyleRule('box-shadow', dark.shadow);
  });
});
