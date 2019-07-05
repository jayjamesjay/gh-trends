import SelectLang from '../../components/SelectLang';

describe('<SelectLang />', () => {
  const languages = ['JavaScript', 'CSS'];
  const label = 'Select language';
  const func = () => {};
  const curr = 'JavaScript';
  const selectLang = shallow(
    <SelectLang curr={curr} onSelect={func} languages={languages} label={label} />
  );

  it(`contains select`, () => {
    expect(
      selectLang
        .find('Select')
        .children()
        .exists()
    ).toEqual(true);
  });

  it(`contains options`, () => {
    expect(
      selectLang
        .find('Option')
        .children()
        .exists()
    ).toEqual(true);
  });
});
