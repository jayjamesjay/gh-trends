import React from 'react';
import renderer from 'react-test-renderer';
import Span, { LabelSpan } from '../../styles/Span';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Span />', () => {
  it('renders with default style', () => {
    const component = renderer.create(<Span />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const component = renderer.create(<Span theme={dark} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it('renders default <LabelSpan />', () => {
  const component = renderer.create(<LabelSpan />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
