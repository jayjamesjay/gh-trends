import { Button, ButtonMain, ToggleSpan } from '../../styles/Button';
import { light, dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Button />', () => {
  it('renders with default background', () => {
    const button = mount(<Button />);
    expect(button).toHaveStyleRule('background', light.bgAdd);
  });

  it('renders with theme background', () => {
    const button = mount(<Button theme={dark} />);
    expect(button).toHaveStyleRule('background', dark.bgAdd);
  });

  it('renders with default color', () => {
    const button = mount(<Button />);
    expect(button).toHaveStyleRule('color', light.color);
  });

  it('renders with theme color', () => {
    const button = mount(<Button theme={dark} />);
    expect(button).toHaveStyleRule('color', dark.color);
  });
});

describe('<ButtonMain />', () => {
  it('renders with default shadow', () => {
    const button = mount(<ButtonMain />);
    expect(button).toHaveStyleRule('box-shadow', light.shadow);
  });

  it('renders with theme shadow', () => {
    const button = mount(<ButtonMain theme={dark} />);
    expect(button).toHaveStyleRule('box-shadow', dark.shadow);
  });

  it('renders according to visible prop', () => {
    {
      const button = mount(<ButtonMain visible={true} />);
      expect(button).toHaveStyleRule('visibility', 'visible');
    }
    {
      const button = mount(<ButtonMain visible={false} />);
      expect(button).toHaveStyleRule('visibility', 'hidden');
    }
  });
});

describe('<ToggleSpan />', () => {
  it('renders with default background', () => {
    const span = mount(<ToggleSpan />);
    expect(span).toHaveStyleRule('background', light.color);
  });

  it('renders with theme background', () => {
    const span = mount(<ToggleSpan theme={dark} />);
    expect(span).toHaveStyleRule('background', dark.color);
  });
});
