import Header from '../../components/Header';

it('renders <Header /> with specified title', () => {
  const title = 'GH Trends';
  const func = () => {};
  const header = shallow(
    <Header link="" title={title} switchTheme={func} hide={false} toggle={func} />
  );

  expect(header.text()).toContain(title);
});
