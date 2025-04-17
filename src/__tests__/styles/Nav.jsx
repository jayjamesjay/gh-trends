import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import Nav from '../../styles/Nav';
import { dark } from '../../styles/Theme';

describe('<Nav />', () => {
  it('renders default', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(<Nav theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders hidden', () => {
    render(<Nav />);
    expect(screen.getByRole('navigation')).toHaveStyleRule('opacity', '0');
  });

  it('renders visible', () => {
    render(<Nav $hide={false} />);
    expect(screen.getByRole('navigation')).toHaveStyleRule('opacity', '1.0');
  });
});
