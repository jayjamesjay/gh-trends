import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Footer from '../../styles/Footer';

test('renders default <Footer />', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
