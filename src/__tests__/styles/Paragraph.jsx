import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { PClean, PFlex } from '../../styles/Paragraph';

describe('<PClean />', () => {
  it('renders default', () => {
    const { asFragment } = render(<PClean />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<PFlex />', () => {
  it('renders default', () => {
    const { asFragment } = render(<PFlex />);
    expect(asFragment()).toMatchSnapshot();
  });
});
