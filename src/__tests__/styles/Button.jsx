import React from 'react';
import { render } from '@testing-library/react';
import {
  Button,
  ButtonMain,
  ButtonIcon,
  ButtonRemove,
  ButtonTheme,
  ButtonAdd,
  MenuToggle,
  ToggleSpan,
} from '../../styles/Button';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Button />', () => {
  it(`renders with default style`, () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`renders with theme`, () => {
    const { asFragment } = render(<Button theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<ButtonMain />', () => {
  it(`renders with default style`, () => {
    const { asFragment } = render(<ButtonMain />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`renders with theme`, () => {
    const { asFragment } = render(<ButtonMain theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`renders visible`, () => {
    const { asFragment } = render(<ButtonMain visible="true" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`renders hidden`, () => {
    const { asFragment } = render(<ButtonMain visible="false" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<ToggleSpan />', () => {
  it(`renders with default style - light theme`, () => {
    const { asFragment } = render(<ToggleSpan />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`open/close`, () => {
    const { asFragment } = render(<ToggleSpan open={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`renders with default style - dark theme`, () => {
    const { asFragment } = render(<ToggleSpan theme={dark} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

it(`renders default <MenuToggle />'`, () => {
  const { asFragment } = render(<MenuToggle />);
  expect(asFragment()).toMatchSnapshot();
});

it(`renders default <ButtonTheme />'`, () => {
  const { asFragment } = render(<ButtonTheme />);
  expect(asFragment()).toMatchSnapshot();
});

it(`renders default <ButtonIcon />'`, () => {
  const { asFragment } = render(<ButtonIcon />);
  expect(asFragment()).toMatchSnapshot();
});

it(`renders default <ButtonRemove />'`, () => {
  const { asFragment } = render(<ButtonRemove />);
  expect(asFragment()).toMatchSnapshot();
});

it(`renders default <ButtonAdd />'`, () => {
  const { asFragment } = render(<ButtonAdd />);
  expect(asFragment()).toMatchSnapshot();
});
