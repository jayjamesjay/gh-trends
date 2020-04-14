import React from 'react';
import { shallow } from 'enzyme';
import Nav, { ListItemLink, MenuToggle } from '../../components/Nav';

const func = () => {};

describe('<ListItemLink />', () => {
  const url = '/saved';
  const title = 'Go to saved';
  const item = shallow(<ListItemLink click={func} link={url} title={title} />);

  it('contains title', () => {
    expect(item.text()).toContain(title);
  });

  it(`is 'li'`, () => {
    expect(item.is('li')).toEqual(true);
  });
});

describe('<Nav />', () => {
  const hide = false;
  const nav = shallow(<Nav hide={hide} links={[['Saved', '/saved']]} linkClick={func} />);

  it(`contains links`, () => {
    expect(nav.find(ListItemLink).exists()).toEqual(true);
  });
});

describe('<MenuToggle />', () => {
  const open = true;
  const toggle = shallow(<MenuToggle toggle={func} open={open} />);

  it(`has aria-label`, () => {
    expect(toggle.prop('aria-label')).toContain('menu');
  });
});
