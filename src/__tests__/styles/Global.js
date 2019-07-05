import GlobalStyle from '../../styles/Global';
import 'jest-styled-components';
import { light } from '../../styles/Theme';

it('constructs global styles', () => {
  const wrapper = mount(<GlobalStyle theme={light} />);
  expect(wrapper).toMatchSnapshot();
});
