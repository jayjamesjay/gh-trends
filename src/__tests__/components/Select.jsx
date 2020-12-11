import React from 'react';
import { shallow } from 'enzyme';
import Select, { SelectLang } from '../../components/Select';

describe('<Select />', () => {
  const languages = ['JavaScript', 'CSS'];
  const label = 'Select language';
  const func = () => {};
  const curr = 'JavaScript';
  const select = shallow(<Select curr={curr} onSelect={func} options={languages} label={label} />);

  it(`contains select`, () => {
    expect(select.find('Select').children().exists()).toEqual(true);
  });

  it(`contains options`, () => {
    expect(select.find('Option').children().exists()).toEqual(true);
  });
});

describe('<SelectLang />', () => {
  const languages = ['JavaScript', 'CSS'];
  const label = 'Select language';
  const func = () => {};
  const curr = 'JavaScript';
  const wrapper = shallow(
    <SelectLang curr={curr} onSelect={func} options={languages} label={label} />
  );

  it(`contains <Select />`, () => {
    expect(wrapper.find(Select).at(0).exists()).toEqual(true);
  });
});
