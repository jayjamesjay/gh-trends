import Home from '../../routes/Home';

describe('<Home />', () => {
  const func = () => {};
  const home = shallow(<Home save={func} saved={[]} />);
  const title = 'Trending repositories';

  it('renders with title', () => {
    expect(home.text()).toContain(title);
  });

  it('onSelect', () => {
    const lang = 'CSS';
    const e = {
      target: {
        value: lang
      }
    };
    home.instance().onSelect(e);

    expect(home.state('lang')).toEqual(lang);
  });
});
