import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Categories from '../../components/Categories';

describe('<Categories />', () => {
  const labels = ['Year', 'Month'];
  const active = 'Month';
  const func = () => {};

  it(`renders with default style`, () => {
    const component = renderer.create(
      <Categories labels={labels} active={active} onClick={func} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`displays labels`, () => {
    render(<Categories labels={labels} active={active} onClick={func} />);

    expect(screen.getByText(labels[0]).textContent).toEqual(labels[0]);
    expect(screen.getByText(labels[1]).textContent).toEqual(labels[1]);
  });

  it(`checks active category`, () => {
    render(<Categories labels={labels} active={active} onClick={func} />);
    expect(screen.getAllByRole('radio', { checked: true })[1].value).toEqual(labels[1]);
  });
});
