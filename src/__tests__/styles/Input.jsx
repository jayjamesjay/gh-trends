import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import TextInput, { InputRadio } from '../../styles/Input';
import { dark } from '../../styles/Theme';

describe('<TextInput />', () => {
  it('renders default', () => {
    const { asFragment } = render(<TextInput />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(<TextInput theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it('renders default <InputRadio />', () => {
  const { asFragment } = render(<InputRadio />);
  expect(asFragment()).toMatchSnapshot();
});
