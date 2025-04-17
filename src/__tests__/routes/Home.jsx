import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { Home } from '../../routes/Home';

describe('<Home />', () => {
  const func = () => {};
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);
  const wrapper = () => render(<Home save={func} saved={[]} />);
  const title = 'Trending repositories';

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({}),
    }),
  );

  it(`renders with default style`, () => {
    const { asFragment } = render(<Home save={func} saved={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with title', () => {
    wrapper();
    expect(screen.getByRole('heading').textContent).toContain(title);
  });
});
