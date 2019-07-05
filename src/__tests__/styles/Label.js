import LabelTab from '../../styles/Label';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<LabelTab />', () => {
  it('renders default', () => {
    const wrapper = mount(<LabelTab />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(<LabelTab theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
