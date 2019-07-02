import Search from '../../routes/Search';

describe('<Search />', () => {
  const func = () => {};
  const query = 'react';
  const search = shallow(<Search save={func} saved={[]} />);

  it('onInput', () => {
    const e = {
      target: {
        value: query
      }
    };
    search.instance().onInput(e);

    expect(search.state('search')).toEqual(query);
  });

  it('onSelect', () => {
    const lang = 'JavaScript';
    search.setState({ search: query });
    const e = {
      target: {
        value: lang
      }
    };
    search.instance().onSelect(e);
    const state = search.state();

    expect(state.search).toEqual(`${query} language:"${lang}"`);
    expect(state.lang).toEqual(lang);
  });
});
