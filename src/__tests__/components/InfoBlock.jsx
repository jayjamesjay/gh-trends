import React from 'react';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import InfoBlock, { RepoLink, SaveRepo } from '../../components/InfoBlock';
import RepoInfo from '../../utils/RepoInfo';

describe('<InfoBlock />', () => {
  const info = new RepoInfo(
    'jayjamesjay/gh-trends',
    '',
    'Loading content for this website...',
    123,
    'JavaScript',
    321,
    'MIT',
  );
  const saved = false;
  const save = (currInfo) => currInfo;

  it(`renders with default style`, () => {
    const { asFragment } = render(<InfoBlock info={info} save={save} saved={saved} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with license', () => {
    render(<InfoBlock info={info} save={save} saved={saved} />);
    expect(screen.queryByText(`License: ${info.license}`)).not.toBeNull();
  });

  it('renders without license', () => {
    info.license = null;

    render(<InfoBlock info={info} save={save} saved={saved} />);
    expect(screen.queryByText(`License: ${info.license}`)).toBeNull();
  });
});

describe('<RepoLink />', () => {
  const author = 'jayjamesjay';
  const name = 'gh-trends';
  const title = `${author}/${name}`;
  const url = 'https://github.com/jayjamesjay/gh-trends';

  it(`renders with default style`, () => {
    const { asFragment } = render(<RepoLink nameWithOwner={title} url={url} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays owner', () => {
    render(<RepoLink nameWithOwner={title} url={url} />);
    expect(screen.queryByText(author).textContent).not.toBeNull();
  });

  it('displays name', () => {
    render(<RepoLink nameWithOwner={title} url={url} />);
    expect(screen.queryByText(`/${name}`).textContent).not.toBeNull();
  });
});

describe('<SaveRepo />', () => {
  const func = () => {};
  const btn = (saved) => render(<SaveRepo save={func} saved={saved} />);

  it(`renders with default style`, () => {
    const { asFragment } = render(<SaveRepo save={func} saved />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`displays add icon if repo hasn't been saved`, () => {
    const saved = false;
    btn(saved);

    expect(screen.getByRole('img').getAttribute('alt')).toContain('Add');
  });

  it(`displays remove icon if repo has been saved`, () => {
    const saved = true;
    btn(saved);

    expect(screen.getByRole('img').getAttribute('alt')).toContain('Remove');
  });
});
