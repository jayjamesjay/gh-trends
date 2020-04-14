import React from 'react';
import { shallow } from 'enzyme';
import Span, { LabelSpan } from '../../styles/Span';
import { dark } from '../../styles/Theme';
import 'jest-styled-components';

describe('<Span />', () => {
  it('renders default', () => {
    const wrapper = shallow(<Span />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with theme', () => {
    const wrapper = shallow(<Span theme={dark} />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('renders default <LabelSpan />', () => {
  const wrapper = shallow(<LabelSpan />);
  expect(wrapper).toMatchSnapshot();
});
