import React from 'react';
import 'jest-styled-components';
import { fireEvent, render, screen } from '@testing-library/react';
import Category from '../../components/Category';

describe('<Category />', () => {
  const checked = false;
  const label = 'Year';
  const func = () => {};

  it(`renders with default style`, () => {
    const { asFragment } = render(<Category checked={checked} label={label} onClick={func} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`is checked/unchecked`, () => {
    render(<Category checked={checked} label={label} onClick={func} />);
    expect(screen.getByLabelText(label).checked).toEqual(checked);
  });

  it(`contains text of label`, () => {
    render(<Category checked={checked} label={label} onClick={func} />);
    expect(screen.queryByLabelText(label)).not.toBeNull();
  });

  it('fires onClick func', () => {
    let temp = 'Month';
    const onClick = (currLabel) => {
      temp = currLabel;
    };

    render(<Category checked={checked} label={label} onClick={onClick} />);
    fireEvent.click(screen.getByLabelText(label));

    expect(temp).toEqual(label);
  });
});
