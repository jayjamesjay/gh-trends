import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import App from '../../components/App';

describe('<App />', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  it('renders default view', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
