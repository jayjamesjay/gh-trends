import App from '../components/App';
import { light } from '../styles/Theme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders with default theme', () => {
  const app = shallow(<App />);
  expect(app.find('ThemeProvider').prop('theme')).toEqual(light);
});
