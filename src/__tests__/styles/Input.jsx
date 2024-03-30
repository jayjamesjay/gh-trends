import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import TextInput, { InputRadio } from '../../styles/Input';
import { dark } from '../../styles/Theme';

describe('<TextInput />', () => {
  it('renders default', () => {
    const component = renderer.create(<TextInput />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const component = renderer.create(<TextInput theme={dark} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it('renders default <InputRadio />', () => {
  const component = renderer.create(<InputRadio />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
