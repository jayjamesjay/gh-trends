import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { PClean, PFlex } from '../../styles/Paragraph';

describe('<PClean />', () => {
  it('renders default', () => {
    const component = renderer.create(<PClean />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<PFlex />', () => {
  it('renders default', () => {
    const component = renderer.create(<PFlex />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
