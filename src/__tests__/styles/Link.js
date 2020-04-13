import { Link, LinkA, HeaderLink } from '../../styles/Link';
import { dark } from '../../styles/Theme';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-styled-components';

describe('<Link />', () => {
  it('renders default', () => {
    const wrapper = mount(
      <Router>
        <Link to="/" />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = mount(
      <Router>
        <Link theme={dark} to="/" />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

it('renders default <HeaderLink />', () => {
  const wrapper = shallow(<HeaderLink to="/" />);
  expect(wrapper).toMatchSnapshot();
});

describe('<LinkA />', () => {
  it('renders default', () => {
    const wrapper = shallow(<LinkA />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = shallow(<LinkA theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});
