import React from 'react';
import { render } from '@testing-library/react';
import Span, { LabelSpan } from '../../styles/Span';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Span />', () => {
  it('renders with default style', () => {
    const { asFragment } = render(<Span />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(<Span theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it('renders default <LabelSpan />', () => {
  const { asFragment } = render(<LabelSpan />);
  expect(asFragment()).toMatchSnapshot();
});
