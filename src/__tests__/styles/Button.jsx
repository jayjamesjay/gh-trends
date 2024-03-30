import React from 'react';
import renderer from 'react-test-renderer';
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
    const component = renderer.create(<Button />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders with theme`, () => {
    const component = renderer.create(<Button theme={dark} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<ButtonMain />', () => {
  it(`renders with default style`, () => {
    const component = renderer.create(<ButtonMain />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders with theme`, () => {
    const component = renderer.create(<ButtonMain theme={dark} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders visible`, () => {
    const component = renderer.create(<ButtonMain visible />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders hidden`, () => {
    const component = renderer.create(<ButtonMain visible={false} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<ToggleSpan />', () => {
  it(`renders with default style - light theme`, () => {
    const component = renderer.create(<ToggleSpan />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`open/close`, () => {
    const component = renderer.create(<ToggleSpan open={false} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders with default style - dark theme`, () => {
    const component = renderer.create(<ToggleSpan theme={dark} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it(`renders default <MenuToggle />'`, () => {
  const component = renderer.create(<MenuToggle />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default <ButtonTheme />'`, () => {
  const component = renderer.create(<ButtonTheme />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default <ButtonIcon />'`, () => {
  const component = renderer.create(<ButtonIcon />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default <ButtonRemove />'`, () => {
  const component = renderer.create(<ButtonRemove />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default <ButtonAdd />'`, () => {
  const component = renderer.create(<ButtonAdd />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
