import React from 'react';
import { shallow } from 'enzyme';
import Category from '../../components/Category';

describe('<Category />', () => {
  const checked = false;
  const label = 'Year';
  const func = () => {};

  it(`contains text of label`, () => {
    const category = shallow(<Category checked={checked} label={label} onClick={func} />);
    expect(category.text()).toEqual(label);
  });

  it('fires onClick func', () => {
    let temp;
    const onClick = currLabel => {
      temp = currLabel;
    };
    const category = shallow(<Category checked={checked} label={label} onClick={onClick} />);

    category.simulate('click');
    expect(temp).toEqual(label);
  });
});
