import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Header, { H1, H2 } from '../../styles/Headers';
import { dark } from '../../styles/Theme';

describe('<Header />', () => {
  it(`renders default`, () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders default`, () => {
    const component = renderer.create(<Header theme={dark} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it(`renders default <H1 />`, () => {
  const component = renderer.create(<H1 />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default <H2 />`, () => {
  const component = renderer.create(<H2 />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
