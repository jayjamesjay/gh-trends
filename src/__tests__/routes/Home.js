import Home from '../../routes/Home';
import Select from '../../components/Select';

describe('<Home />', () => {
  const func = () => {};
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);
  const wrapper = shallow(<Home save={func} saved={[]} />);
  const title = 'Trending repositories';

  it('renders with title', () => {
    expect(wrapper.text()).toContain(title);
  });

  it('onSelect', () => {
    const lang = 'CSS';
    const e = {
      target: {
        value: lang
      }
    };
    wrapper
      .find(Select)
      .at(0)
      .props()
      .onSelect(e);

    expect(setState).toHaveBeenCalledWith(lang);
  });
});
