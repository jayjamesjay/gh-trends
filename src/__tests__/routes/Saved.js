import Saved from '../../routes/Saved';
import { initData, DownloadLink } from '../../components/Data';
import Tab from '../../components/Tab';

describe('<Saved />', () => {
  const func = () => {};
  const saved = shallow(<Saved save={func} removeAll={func} data={initData} />);

  it('renders with title - no repos', () => {
    const saved = shallow(<Saved save={func} removeAll={func} data={[]} />);
    const title = `You haven't saved any repos...`;

    expect(saved.text()).toContain(title);
  });

  it('renders with title - some repos', () => {
    const title = `Saved repositories`;
    expect(saved.text()).toContain(title);
  });

  it('creates download link for JSON', () => {
    const name = `saved.json`;
    expect(saved.find(DownloadLink).prop('filename')).toEqual(name);
  });

  it('creates download link for Markdown', () => {
    saved.setState({ active: 'Markdown' });
    const name = `saved.md`;

    expect(saved.find(DownloadLink).prop('filename')).toEqual(name);
  });

  it('onClick', () => {
    const label = 'HTML';
    saved.instance().onClick(label);

    expect(saved.state('active')).toEqual(label);
  });

  it('fires onClick', () => {
    const saved = mount(<Saved save={func} removeAll={func} data={initData} />);
    saved
      .find(Tab)
      .at(1)
      .simulate('click');

    expect(saved.state('active')).toEqual('Markdown');
  });
});
