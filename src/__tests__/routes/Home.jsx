import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
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
    const component = renderer.create(<Home save={func} saved={[]} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with title', () => {
    wrapper();
    expect(screen.getByRole('heading').textContent).toContain(title);
  });
});
