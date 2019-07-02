import Footer from '../../components/Footer';

const text = 'Copyright © 2019 jayjamesjay. All Rights Reserved.';

it('renders a <Footer/> with copyright info', () => {
  const footer = shallow(<Footer />);
  expect(footer.text()).toContain(text);
});
