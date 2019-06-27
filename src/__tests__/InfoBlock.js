import { RepoLink, SaveRepo } from '../components/InfoBlock';

describe('<RepoLink />', () => {
  const author = 'jayjamesjay';
  const name = 'gh-trends';
  const title = `${author}/${name}`;
  const url = 'https://github.com/jayjamesjay/gh-trends';
  const repoLink = shallow(<RepoLink nameWithOwner={title} url={url} />);

  it('displays name and owner', () => {
    expect(repoLink.text()).toContain(author);
    expect(repoLink.text()).toContain(name);
  });
});

describe('<SaveRepo />', () => {
  const func = () => {};
  const btn = saved => shallow(<SaveRepo save={func} saved={saved} />);

  it(`displays add icon if repo hasn't been saved`, () => {
    const saved = false;
    const saveRepo = btn(saved);

    expect(saveRepo.find('Img').prop('alt')).toContain('Add');
  });

  it(`displays remove icon if repo has been saved`, () => {
    const saved = true;
    const saveRepo = btn(saved);

    expect(saveRepo.find('Img').prop('alt')).toContain('Remove');
  });
});
