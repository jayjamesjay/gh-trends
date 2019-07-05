import { Main, Content, TextBlock } from '../../styles/Main';
import 'jest-styled-components';

it('renders default <Main />', () => {
  const wrapper = shallow(<Main />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <Content />', () => {
  const wrapper = shallow(<Content />);
  expect(wrapper).toMatchSnapshot();
});

it('renders default <TextBlock />', () => {
  const wrapper = shallow(<TextBlock />);
  expect(wrapper).toMatchSnapshot();
});
