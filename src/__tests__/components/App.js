import App from '../../components/App';
import { light, dark } from '../../styles/Theme';
import { initData } from '../../components/Data';

describe('<App />', () => {
  const app = shallow(<App />);

  it('renders with default theme', () => {
    expect(app.find('ThemeProvider').prop('theme')).toEqual(light);
  });

  it('toggleMenu', () => {
    expect(app.state('hideMenu')).toEqual(true);

    app.instance().toggleMenu();
    expect(app.state('hideMenu')).toEqual(false);
  });

  it('switchTheme', () => {
    app.instance().switchTheme();
    expect(app.state('theme')).toEqual(dark);

    app.instance().switchTheme();
    expect(app.state('theme')).toEqual(light);
  });

  it('adds element to saved', () => {
    app.instance().save(initData[0]);
    expect(app.state('saved')).toEqual([initData[0]]);
  });

  it('removes element from saved', () => {
    const instance = app.instance();
    instance.setState({ saved: [initData[0]] });
    instance.save(initData[0]);
    expect(app.state('saved')).toEqual([]);
  });
});
