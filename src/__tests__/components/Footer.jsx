import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

const text = 'Copyright © 2022 jayjamesjay. All Rights Reserved. Project under MIT licence.';

describe('<Footer />', () => {
  it(`renders with default style`, () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with correct copyright info', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo').textContent).toEqual(text);
  });
});
