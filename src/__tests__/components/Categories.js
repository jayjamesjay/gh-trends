import Categories from '../../components/Categories';
import Category from '../../components/Category';

describe('<Categories />', () => {
  const labels = ['Year', 'Month'];
  const active = 'Year';
  const func = () => {};
  const wrapper = shallow(<Categories labels={labels} active={active} onClick={func} />);
  const categoryList = wrapper.find(Category);

  it(`displays with labels`, () => {
    expect(categoryList.at(0).prop('label')).toEqual(labels[0]);
    expect(categoryList.at(1).prop('label')).toEqual(labels[1]);
  });

  it(`checks active category`, () => {
    expect(categoryList.at(0).prop('checked')).toEqual(true);
  });
});
