import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Footer from '../../styles/Footer';

test('renders default <Footer />', () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
