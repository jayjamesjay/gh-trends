import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { Saved } from '../../routes/Saved';
import RepoInfo from '../../utils/RepoInfo';

describe('<Saved />', () => {
  const func = () => {};
  const initData = new Array(6);
  const wrapper = () => render(<Saved save={func} removeAllSaved={func} saved={initData} />);

  for (let i = 0; i < initData.length; i += 1) {
    const curr = new RepoInfo(
      'jayjamesjay/gh-trends',
      '',
      'Loading content for this website...',
      123,
      'JavaScript',
      321,
      'MIT',
    );
    curr.nameWithOwner += i;
    initData[i] = curr;
  }

  it(`renders with default style`, () => {
    const component = renderer.create(<Saved save={func} removeAllSaved={func} saved={initData} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with title - no repos', () => {
    render(<Saved save={func} removeAllSaved={func} saved={[]} />);
    const title = `You haven't saved any repos...`;

    expect(screen.getByRole('heading').textContent).toContain(title);
  });

  it('renders with title - some repos', () => {
    wrapper();
    const title = `Saved repositories`;

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(title);
  });

  it('creates default download link', () => {
    wrapper();
    const name = `saved.json`;

    expect(screen.getAllByRole('link')[0].getAttribute('download')).toEqual(name);
  });

  it('creates download link for Markdown', () => {
    const name = `saved.md`;
    render(<Saved save={func} removeAllSaved={func} saved={initData} />);
    fireEvent.click(screen.getByLabelText('Markdown'));

    expect(screen.getAllByRole('link')[0].getAttribute('download')).toEqual(name);
  });

  it('onClick', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

    render(<Saved save={func} removeAllSaved={func} saved={initData} />);
    fireEvent.click(screen.getByLabelText('Markdown'));

    expect(setState).toHaveBeenCalledWith('Markdown');
    jest.clearAllMocks();
  });
});
