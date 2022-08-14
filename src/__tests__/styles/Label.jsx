import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import LabelCategory from '../../styles/Label';
import { dark } from '../../styles/Theme';

describe('<LabelCategory />', () => {
  it('renders default', () => {
    const component = renderer.create(<LabelCategory />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const component = renderer.create(<LabelCategory theme={dark} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
