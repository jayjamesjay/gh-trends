import React from 'react';
import { shallow, mount } from 'enzyme';
import { Saved } from '../../routes/Saved';
import { DownloadLink } from '../../components/Data';
import Category from '../../components/Category';
import RepoInfo from '../../components/RepoInfo';

describe('<Saved />', () => {
  let wrapper;
  const func = () => {};
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

  beforeEach(() => {
    wrapper = shallow(<Saved save={func} removeAllSaved={func} saved={initData} />);
  });

  it('renders with title - no repos', () => {
    const saved = shallow(<Saved save={func} removeAllSaved={func} saved={[]} />);
    const title = `You haven't saved any repos...`;

    expect(saved.text()).toContain(title);
  });

  it('renders with title - some repos', () => {
    const title = `Saved repositories`;
    expect(wrapper.text()).toContain(title);
  });

  it('creates deafult download link', () => {
    const name = `saved.json`;
    expect(wrapper.find(DownloadLink).prop('filename')).toEqual(name);
  });

  it('creates download link for Markdown', () => {
    const name = `saved.md`;
    const wrapperAlt = mount(<Saved save={func} removeAllSaved={func} saved={initData} />);
    wrapperAlt.find(Category).at(1).simulate('click');

    expect(wrapperAlt.find(DownloadLink).prop('filename')).toEqual(name);
  });

  it('onClick', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

    const wrapperAlt = mount(<Saved save={func} removeAllSaved={func} saved={initData} />);
    wrapperAlt.find(Category).at(1).simulate('click');

    expect(setState).toHaveBeenCalledWith('Markdown');
    jest.clearAllMocks();
  });
});
