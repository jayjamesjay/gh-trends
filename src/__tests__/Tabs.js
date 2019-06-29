import Tabs, { Categories } from '../components/Tabs';
import Tab from '../components/Tab';

describe('<Tab />', () => {
  const label1 = 'Year';
  const label2 = 'Month';
  const content = 'Testing tab content';
  const invisibleContent = `You shouldn't see this`;

  const tabs = shallow(
    <Tabs>
      <div label={label1}>{content}</div>
      <div label={label2}>{invisibleContent}</div>
    </Tabs>
  );

  it(`displays content of first tab`, () => {
    expect(tabs.text()).toContain(content);
    expect(tabs.text()).not.toContain(invisibleContent);
  });
});

describe('<Categories />', () => {
  const labels = ['Year', 'Month'];
  const active = 'Year';
  const func = () => {};
  const categories = shallow(<Categories labels={labels} active={active} onClick={func} />);
  const tabs = categories.find(Tab);

  it(`displays with labels`, () => {
    expect(tabs.at(0).prop('label')).toEqual(labels[0]);
    expect(tabs.at(1).prop('label')).toEqual(labels[1]);
  });

  it(`sets active tab`, () => {
    expect(tabs.at(0).prop('checked')).toEqual(true);
  });
});
