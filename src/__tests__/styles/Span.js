import Span from '../../styles/Span';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Span />', () => {
  it('renders default', () => {
    const wrapper = shallow(<Span />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = shallow(<Span theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
