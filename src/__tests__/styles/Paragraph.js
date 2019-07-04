import { P, PClean, PAlt } from '../../styles/Paragraph';
import 'jest-styled-components';

describe('<P/>', () => {
  it('renders default', () => {
    const wrapper = shallow(<P />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<PClean />', () => {
  it('renders default', () => {
    const wrapper = shallow(<PClean />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<PAlt />', () => {
  it('renders default', () => {
    const wrapper = shallow(<PAlt />);
    expect(wrapper).toMatchSnapshot();
  });
});
