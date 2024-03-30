import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Select, { SelectLang } from '../../components/Select';

describe('<Select />', () => {
  const languages = ['JavaScript', 'CSS'];
  const label = 'Select language';
  const func = () => {};
  const curr = 'JavaScript';
  const select = () =>
    render(<Select curr={curr} onSelect={func} options={languages} label={label} />);

  it(`renders with default style`, () => {
    const component = renderer.create(
      <Select curr={curr} onSelect={func} options={languages} label={label} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`has aria-label`, () => {
    select();
    expect(screen.queryByRole('combobox').getAttribute('aria-label')).toEqual('Select language');
  });

  it(`contains options`, () => {
    select();
    expect(screen.queryAllByRole('option')).toHaveLength(2);
  });
});

describe('<SelectLang />', () => {
  const languages = ['JavaScript', 'CSS'];
  const label = 'Select language';
  const func = () => {};
  const curr = 'JavaScript';
  const select = () =>
    render(<SelectLang curr={curr} onSelect={func} options={languages} label={label} />);

  it(`renders with default style`, () => {
    const component = renderer.create(
      <SelectLang curr={curr} onSelect={func} options={languages} label={label} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`has aria-label`, () => {
    select();
    expect(screen.queryByRole('combobox').getAttribute('aria-label')).toEqual('Languages');
  });

  it(`contains image`, () => {
    select();
    expect(screen.queryByRole('img').getAttribute('alt')).toEqual(label);
  });
});
