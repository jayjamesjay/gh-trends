import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Select from '../../styles/Select';
import { dark } from '../../styles/Theme';

describe('<Select />', () => {
  it('renders with default style', () => {
    const component = renderer.create(<Select />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const component = renderer.create(<Select theme={dark} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
