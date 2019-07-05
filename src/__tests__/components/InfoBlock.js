import InfoBlock, { RepoLink, SaveRepo } from '../../components/InfoBlock';
import { RepoInfo } from '../../components/Data';

describe('<InfoBlock />', () => {
  const info = new RepoInfo(
    'jayjamesjay/gh-trends',
    '',
    'Loading content for this website...',
    123,
    '',
    321,
    'MIT'
  );
  const saved = false;
  let temp;
  const save = info => {
    temp = info;
  };

  it('renders with default background color', () => {
    {
      const infoBlock = shallow(<InfoBlock info={info} save={save} saved={saved} />);
      expect(infoBlock.prop('bg')).toEqual(null);
    }
    {
      info.language = 'JavaScript';
      const infoBlock = shallow(<InfoBlock info={info} save={save} saved={saved} />);

      expect(infoBlock.prop('bg')).toEqual('#f1e05a');
    }
  });

  it('renders with license', () => {
    const infoBlock = shallow(<InfoBlock info={info} save={save} saved={saved} />);
    expect(infoBlock.text()).toContain('License');
  });

  it('renders without license', () => {
    info.license = null;
    const infoBlock = shallow(<InfoBlock info={info} save={save} saved={saved} />);

    expect(infoBlock.text()).not.toContain('License');
  });

  it('saves info', () => {
    const infoBlock = shallow(<InfoBlock info={info} save={save} saved={saved} />);
    infoBlock.instance().save();

    expect(temp).toEqual(info);
  });
});

describe('<RepoLink />', () => {
  const author = 'jayjamesjay';
  const name = 'gh-trends';
  const title = `${author}/${name}`;
  const url = 'https://github.com/jayjamesjay/gh-trends';
  const repoLink = shallow(<RepoLink nameWithOwner={title} url={url} />);

  it('displays owner', () => {
    expect(repoLink.text()).toContain(author);
  });

  it('displays name', () => {
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
