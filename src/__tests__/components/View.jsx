import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import View, { ViewSingle } from '../../components/View';
import { loadingState } from '../../utils/Fetch';
import RepoInfo from '../../utils/RepoInfo';

const initData = new Array(6);

for (let i = 0; i < initData.length; i += 1) {
  const curr = new RepoInfo(
    `jayjamesjay/gh-trends`,
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
  const license = 'License: MIT';

  it(`renders with default style`, () => {
    const component = renderer.create(<View data={[]} saved={[]} save={func} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders empty', () => {
    render(<View data={[]} saved={[]} save={func} />);
    expect(screen.queryAllByText(license)).toHaveLength(0);
  });

  it('renders with items', () => {
    render(<View data={initData} saved={[]} save={func} />);
    expect(screen.queryAllByText(license)).toHaveLength(6);
  });

  it('renders with saved', () => {
    render(<View data={initData} saved={initData.slice(0, 3)} save={func} />);
    expect(screen.queryAllByAltText('Remove from saved')).toHaveLength(3);
  });
});

describe('<ViewSingle />', () => {
  const id = 'view-1';
  let tempId;
  const func = () => {};
  const loading = loadingState.LOADED;
  const loadData = () => {
    tempId = id;
  };

  it(`renders with default style`, () => {
    const component = renderer.create(
      <ViewSingle data={initData} saved={[]} save={func} loadData={func} loading={loading} />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders empty and does not display Button`, () => {
    render(
      <ViewSingle data={[]} saved={[]} save={func} loadData={func} loading={loadingState.INPROGRESS} />
    );
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('renders with items and displays Button', () => {
    render(<ViewSingle data={initData} saved={[]} save={func} loadData={func} loading={loading} />);
    expect(screen.queryByText('Show more')).not.toBeNull();
  });

  it('fires loadData', () => {
    render(
      <ViewSingle data={initData} saved={[]} save={func} loadData={loadData} loading={loading} />
    );
    fireEvent.click(screen.queryByText('Show more'));

    expect(tempId).toEqual(id);
  });
});
