import React from 'react';
import { shallow } from 'enzyme';
import View, { ViewSingle } from '../../components/View';
import { initData } from '../../components/Data';
import InfoBlock from '../../components/InfoBlock';
import { ButtonMain } from '../../styles/Button';

describe('<View />', () => {
  const func = () => {};

  it('renders empty', () => {
    const view = shallow(<View data={[]} saved={[]} save={func} />);
    expect(view.find(InfoBlock).exists()).toEqual(false);
  });

  it('renders with items', () => {
    const view = shallow(<View data={initData} saved={[]} save={func} />);
    expect(view.find(InfoBlock).exists()).toEqual(true);
  });

  it('renders with saved', () => {
    const view = shallow(<View data={initData} saved={initData.slice(0, 3)} save={func} />);
    expect(view.find(InfoBlock).exists()).toEqual(true);
  });
});

describe('<ViewSingle />', () => {
  const id = 'view-1';
  let tempId;
  const func = () => {};
  const load = () => {
    tempId = id;
  };

  it(`renders empty and does not display Button`, () => {
    const view = shallow(<ViewSingle data={[]} saved={[]} save={func} loadData={func} />);
    expect(view.find(ButtonMain).prop('visible')).toEqual(false);
  });

  it('renders with items and displays Button', () => {
    const view = shallow(<ViewSingle data={initData} saved={[]} save={func} loadData={func} />);
    expect(view.find(ButtonMain).prop('visible')).toEqual(true);
  });

  it('fires loadData', () => {
    const view = shallow(<ViewSingle data={initData} saved={[]} save={func} loadData={load} />);

    view
      .find(ButtonMain)
      .at(0)
      .simulate('click');
    expect(tempId).toEqual(id);
  });
});