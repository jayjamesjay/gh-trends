import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import LabelCategory from '../../styles/Label';
import { dark } from '../../styles/Theme';

describe('<LabelCategory />', () => {
  it('renders default', () => {
    const { asFragment } = render(<LabelCategory />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const { asFragment } = render(<LabelCategory theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
