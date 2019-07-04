import Header from '../../styles/Headers';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Header />', () => {
  it('renders default', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = shallow(<Header theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
