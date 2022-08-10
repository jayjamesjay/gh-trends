import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });
global.fetch = jest.fn(() => new Promise((resolve) => resolve()));
