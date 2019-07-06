import { Main, Content, BottomBar } from '../../styles/Main';
import 'jest-styled-components';

it('renders default <Main />', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <Content />', () => {
  const wrapper = shallow(<Content />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <BottomBar />', () => {
  const wrapper = shallow(<BottomBar />);
  expect(wrapper).toMatchSnapshot();
});
