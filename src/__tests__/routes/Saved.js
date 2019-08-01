import Saved from '../../routes/Saved';
import { initData, DownloadLink } from '../../components/Data';
import Tab from '../../components/Tab';

describe('<Saved />', () => {
  let wrapper;
  const func = () => {};

  beforeEach(() => {
    wrapper = shallow(<Saved save={func} removeAll={func} data={initData} />);
  });

  it('renders with title - no repos', () => {
    const saved = shallow(<Saved save={func} removeAll={func} data={[]} />);
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
    const wrapper = mount(<Saved save={func} removeAll={func} data={initData} />);
    wrapper
      .find(Tab)
      .at(1)
      .simulate('click');

    expect(wrapper.find(DownloadLink).prop('filename')).toEqual(name);
  });

  it('onClick', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(init => [init, setState]);

    const wrapper = mount(<Saved save={func} removeAll={func} data={initData} />);
    wrapper
      .find(Tab)
      .at(1)
      .simulate('click');

    expect(setState).toHaveBeenCalledWith('Markdown');
    jest.clearAllMocks();
  });
});
