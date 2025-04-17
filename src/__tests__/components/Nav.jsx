import React from 'react';
import 'jest-styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Nav, { ListItemLink, MenuToggle } from '../../components/Nav';

const func = () => {};

describe('<ListItemLink />', () => {
  const url = '/saved';
  const title = 'Go to saved';
  const item = () =>
    render(
      <Router>
        <ListItemLink click={func} link={url} title={title} />
      </Router>,
    );

  it(`renders with default style`, () => {
    const { asFragment } = render(
      <Router>
        <ListItemLink click={func} link={url} title={title} />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains title', () => {
    item();
    expect(screen.getByRole('link').textContent).toContain(title);
  });

  it(`is 'li'`, () => {
    item();
    expect(screen.getByRole('listitem').textContent).toContain(title);
  });
});

describe('<Nav />', () => {
  it(`renders with default style`, () => {
    const { asFragment } = render(
      <Router>
        <Nav
          $hide={false}
          links={[
            ['Saved', '/saved'],
            ['Home', '/'],
          ]}
          linkClick={func}
        />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it(`contains links`, () => {
    render(
      <Router>
        <Nav
          $hide={false}
          links={[
            ['Saved', '/saved'],
            ['Home', '/'],
          ]}
          linkClick={func}
        />
      </Router>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});

describe('<MenuToggle />', () => {
  it(`renders with default style`, () => {
    const { asFragment } = render(<MenuToggle toggle={func} $open />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`has aria-label`, () => {
    render(<MenuToggle toggle={func} $open />);
    expect(screen.queryByRole('button').getAttribute('aria-label')).toBe('Open menu');
  });
});
