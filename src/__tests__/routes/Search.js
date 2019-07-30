import Search from '../../routes/Search';
import TextInput from '../../styles/Input';
import SelectLang from '../../components/SelectLang';

describe('<Search />', () => {
  const func = () => {};
  const query = 'react';
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Search save={func} saved={[]} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('onInput', () => {
    const e = {
      target: {
        value: query
      }
    };

    wrapper.find(TextInput).props().onChange(e);
    expect(setState).toHaveBeenCalledWith(query);
  });

  it('onSelect', () => {
    const lang = 'JavaScript';
    const e = {
      target: {
        value: lang
      }
    };

    wrapper.find(SelectLang).props().onSelect(e);
    expect(setState).toHaveBeenCalledWith(lang);
  });
});
