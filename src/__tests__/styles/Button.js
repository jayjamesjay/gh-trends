import { Button, ButtonMain, ToggleSpan } from '../../styles/Button';
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
    const button = mount(<ButtonMain visible={true} />);
    expect(button).toHaveStyleRule('visibility', 'visible');
  });

  it('renders hidden', () => {
    const button = mount(<ButtonMain visible={false} />);
    expect(button).toHaveStyleRule('visibility', 'hidden');
  });
});

describe('<ToggleSpan />', () => {
  it('renders default', () => {
    const wrapper = mount(<ToggleSpan />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<ToggleSpan theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
