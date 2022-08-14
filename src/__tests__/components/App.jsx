import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import App from '../../components/App';

describe('<App />', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  it('renders default view', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
