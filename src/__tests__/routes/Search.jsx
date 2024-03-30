import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
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
    const component = renderer.create(<Search save={func} saved={[]} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
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
