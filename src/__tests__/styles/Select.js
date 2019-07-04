import Select from '../../styles/Select';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Select />', () => {
  it('renders default', () => {
    const wrapper = mount(<Select />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<Select theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
