import Article, { oppositeBg } from '../../styles/Article';
import { light, dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('oppositeBg', () => {
  it('with selected bg', () => {
    const props = {
      bg: light.bg
    };

    const bg = oppositeBg(props);
    expect(bg).toEqual(light.bg);
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
  it('renders default', () => {
    const wrapper = shallow(<Article />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = shallow(<Article theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
