import Nav from '../../styles/Nav';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Nav />', () => {
  it('renders default', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = shallow(<Nav theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders hidden', () => {
    const wrapper = mount(<Nav />);
    expect(wrapper).toHaveStyleRule('opacity', '0');
  });

  it('renders visible', () => {
    const wrapper = mount(<Nav hide={false} />);
    expect(wrapper).toHaveStyleRule('opacity', '1.0');
  });
});
