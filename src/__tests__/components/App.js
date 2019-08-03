import App from '../../components/App';
import Header from '../../components/Header';
import { light } from '../../styles/Theme';

describe('<App />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default theme', () => {
    expect(wrapper.find('ThemeProvider').prop('theme')).toEqual(light);
  });

  it('toggleMenu - shows and hides menu', () => {
    wrapper
      .find(Header)
      .props()
      .toggle();
    expect(setState).toHaveBeenCalledWith(false);
  });
});
