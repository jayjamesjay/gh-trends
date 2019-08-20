import Header, { H1, H1Alt, H2 } from '../../styles/Headers';
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

it('renders default <H1 />', () => {
  const wrapper = mount(<H1 />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <H2 />', () => {
  const wrapper = mount(<H2 />);
  expect(wrapper).toMatchSnapshot();
});
