import React from 'react';
import 'jest-styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from '../../routes/Search';

describe('<Search />', () => {
  const func = () => {};
  const query = 'react';
  const lang = 'JavaScript';

  const wrapper = () => render(<Search save={func} saved={[]} />);
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`renders with default style`, () => {
    const { asFragment } = render(<Search save={func} saved={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('onInput', () => {
    wrapper();
    fireEvent.input(screen.getByLabelText('Search for repositories'), { target: { value: query } });

    expect(setState).toHaveBeenCalledWith(query);
  });

  it('onSelect', () => {
    wrapper();
    fireEvent.change(screen.getByLabelText('Languages'), { target: { value: lang } });

    expect(setState).toHaveBeenCalledWith(lang);
  });
});
