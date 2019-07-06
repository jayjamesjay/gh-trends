import { PClean, PFlex } from '../../styles/Paragraph';
import 'jest-styled-components';

describe('<PClean />', () => {
  it('renders default', () => {
    const wrapper = shallow(<PClean />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<PFlex />', () => {
  it('renders default', () => {
    const wrapper = shallow(<PFlex />);
    expect(wrapper).toMatchSnapshot();
  });
});
