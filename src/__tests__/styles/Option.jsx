import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Option from '../../styles/Option';

it('renders default <Option/>', () => {
  const component = renderer.create(<Option />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
