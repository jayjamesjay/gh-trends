import React from 'react';
import 'jest-styled-components';
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
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders with theme`, () => {
    const component = renderer.create(<Button theme={dark} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<ButtonMain />', () => {
  it(`renders with default style`, () => {
    const component = renderer.create(<ButtonMain />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders with theme`, () => {
    const component = renderer.create(<ButtonMain theme={dark} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders visible`, () => {
    const component = renderer.create(<ButtonMain visible />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders hidden`, () => {
    const component = renderer.create(<ButtonMain visible={false} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<ToggleSpan />', () => {
  it(`renders with default style`, () => {
    const component = renderer.create(<ToggleSpan />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`open/close`, () => {
    const component = renderer.create(<ToggleSpan open={false} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders with default style`, () => {
    const component = renderer.create(<ToggleSpan theme={dark} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it(`renders default <MenuToggle />'`, () => {
  const component = renderer.create(<MenuToggle />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default <ButtonTheme />'`, () => {
  const component = renderer.create(<ButtonTheme />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default <ButtonIcon />'`, () => {
  const component = renderer.create(<ButtonIcon />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default <ButtonRemove />'`, () => {
  const component = renderer.create(<ButtonRemove />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default <ButtonAdd />'`, () => {
  const component = renderer.create(<ButtonAdd />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
