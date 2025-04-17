import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Select from '../../styles/Select';
import { dark } from '../../styles/Theme';

describe('<Select />', () => {
  it('renders with default style', () => {
    const { asFragment } = render(<Select />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(<Select theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
