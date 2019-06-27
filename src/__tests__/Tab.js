import Tab from '../components/Tab';

describe('<Tab />', () => {
  const checked = false;
  const label = 'Year';
  const func = () => {};

  const tab = shallow(<Tab checked={checked} label={label} onClick={func} />);

  it(`contains text of label`, () => {
    expect(tab.text()).toEqual(label);
  });
});
