import View from '../components/View';

describe('<View />', () => {
  const func = () => {};
  const view = shallow(<View data={[]} saved={[]} save={func} />);

  it(`renders empty view`, () => {
    expect(view.find('Content').exists()).toEqual(false);
  });
});
