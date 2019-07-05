import Header from '../../styles/Headers';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Header />', () => {
  it('renders default', () => {
    const wrapper = mount(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<Header theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
