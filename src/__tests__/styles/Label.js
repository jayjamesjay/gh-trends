import LabelCategory from '../../styles/Label';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<LabelCategory />', () => {
  it('renders default', () => {
    const wrapper = mount(<LabelCategory />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<LabelCategory theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
