import Tabs from '../components/Tabs';

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
  });
});
