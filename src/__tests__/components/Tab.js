import Tab from '../../components/Tab';

describe('<Tab />', () => {
  const checked = false;
  const label = 'Year';
  const func = () => {};

  it(`contains text of label`, () => {
    const tab = shallow(<Tab checked={checked} label={label} onClick={func} />);
    expect(tab.text()).toEqual(label);
  });

  it('fires onClick func', () => {
    let temp;
    const onClick = label => {
      temp = label;
    };
    const tab = shallow(<Tab checked={checked} label={label} onClick={onClick} />);

    tab.simulate('click');
    expect(temp).toEqual(label);
  });
});
