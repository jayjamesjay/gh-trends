import Tabs, { Categories } from '../../components/Tabs';
import Tab from '../../components/Tab';

describe('<Categories />', () => {
  const labels = ['Year', 'Month'];
  const active = 'Year';
  const func = () => {};
  const wrapper = shallow(<Categories labels={labels} active={active} onClick={func} />);
  const tabs = wrapper.find(Tab);

  it(`displays with labels`, () => {
    expect(tabs.at(0).prop('label')).toEqual(labels[0]);
    expect(tabs.at(1).prop('label')).toEqual(labels[1]);
  });

  it(`checks active tab`, () => {
    expect(tabs.at(0).prop('checked')).toEqual(true);
  });
});

describe('<Tabs />', () => {
  const label1 = 'Year';
  const label2 = 'Month';
  const content = 'Testing tab content';
  const altContent = `You shouldn't see this`;
  const wrapper = shallow(
    <Tabs>
      <div label={label1}>{content}</div>
      <div label={label2}>{altContent}</div>
    </Tabs>
  );

  it(`displays content of selected tab`, () => {
    expect(wrapper.text()).toContain(content);
    expect(wrapper.text()).not.toContain(altContent);
  });

  it(`onClickTabItem`, () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(init => [init, setState]);

    const wrapperAlt = mount(
      <Tabs>
        <div label={label1}>{content}</div>
        <div label={label2}>{altContent}</div>
      </Tabs>
    );

    wrapperAlt
      .find(Tab)
      .at(1)
      .simulate('click');
    expect(setState).toHaveBeenCalledWith(label2);

    jest.clearAllMocks();
  });
});
