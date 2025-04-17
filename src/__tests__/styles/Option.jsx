import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Option from '../../styles/Option';

it('renders default <Option/>', () => {
  const { asFragment } = render(<Option />);
  expect(asFragment()).toMatchSnapshot();
});
