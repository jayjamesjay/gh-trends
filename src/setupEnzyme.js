import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
global.fetch = jest.fn(() => new Promise((resolve) => resolve()));
