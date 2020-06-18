import React from 'react';
import { shallow } from 'enzyme';
import View, { ViewSingle } from '../../components/View';
import InfoBlock from '../../components/InfoBlock';
import { load } from '../../components/Fetch';
import { ButtonMain } from '../../styles/Button';
import RepoInfo from '../../components/RepoInfo';

const initData = new Array(6);

for (let i = 0; i < initData.length; i += 1) {
  const curr = new RepoInfo(
    'jayjamesjay/gh-trends',
    '',
    'Loading content for this website...',
    123,
    'JavaScript',
    321,
    'MIT'
  );
  curr.nameWithOwner += i;
  initData[i] = curr;
}

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
  const loading = load.LOADED;
  const loadData = () => {
    tempId = id;
  };

  it(`renders empty and does not display Button`, () => {
    const view = shallow(
      <ViewSingle data={[]} saved={[]} save={func} loadData={func} loading={loading} />
    );
    expect(view.find(ButtonMain).prop('visible')).toEqual(false);
  });

  it('renders with items and displays Button', () => {
    const view = shallow(
      <ViewSingle data={initData} saved={[]} save={func} loadData={func} loading={loading} />
    );
    expect(view.find(ButtonMain).prop('visible')).toEqual(true);
  });

  it('fires loadData', () => {
    const view = shallow(
      <ViewSingle data={initData} saved={[]} save={func} loadData={loadData} loading={loading} />
    );

    view
      .find(ButtonMain)
      .at(0)
      .simulate('click');
    expect(tempId).toEqual(id);
  });
});
