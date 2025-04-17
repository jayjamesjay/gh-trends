import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Header, { H1, H2 } from '../../styles/Headers';
import { dark } from '../../styles/Theme';

describe('<Header />', () => {
  it(`renders default - light theme`, () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`renders default - dark theme`, () => {
    const { asFragment } = render(<Header theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it(`renders default <H1 />`, () => {
  const { asFragment } = render(<H1 />);
  expect(asFragment()).toMatchSnapshot();
});

it(`renders default <H2 />`, () => {
  const { asFragment } = render(<H2 />);
  expect(asFragment()).toMatchSnapshot();
});
