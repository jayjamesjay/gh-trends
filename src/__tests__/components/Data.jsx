import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { jsonToMarkdown, DownloadLink, identicalItems } from '../../components/Data';
import RepoInfoList from '../../utils/RepoInfoList';
import RepoInfo from '../../utils/RepoInfo';

it('compares nameWithOwner of two items', () => {
  const elem1 = { nameWithOwner: 'abb', age: 30 };
  const elem2 = { nameWithOwner: 'abb', age: 31 };

  expect(identicalItems(elem1, elem2)).toBe(true);
});

describe('RepoInfo', () => {
  it('from one element of Github Reest API reponse array', () => {
    const response = {
      full_name: 'jayjamesjay/gh-trends',
      html_url: '',
      description: 'Loading content for this website...',
      stargazers_count: 100,
      language: 'JavaScript',
      forks: 321,
      license: {
        spdx_id: 'MIT',
      },
    };

    const expected = new RepoInfo(
      'jayjamesjay/gh-trends',
      '',
      'Loading content for this website...',
      100,
      'JavaScript',
      321,
      'MIT'
    );

    expect(RepoInfo.fromGithubRes(response)).toEqual(expected);
  });

  it('from one element of Github Reest API reponse array without license', () => {
    const response = {
      full_name: 'jayjamesjay/gh-trends',
      html_url: '',
      description: 'Loading content for this website...',
      stargazers_count: 100,
      language: 'JavaScript',
      forks: 321,
      license: null,
    };

    const expected = new RepoInfo(
      'jayjamesjay/gh-trends',
      '',
      'Loading content for this website...',
      100,
      'JavaScript',
      321,
      null
    );

    expect(RepoInfo.fromGithubRes(response)).toEqual(expected);
  });
});

describe('<RepoInfoList />', () => {
  const expectedElem = new RepoInfo(
    'jayjamesjay/gh-trends',
    '',
    'Loading content for this website...',
    100,
    'JavaScript',
    321,
    'MIT'
  );

  const expectedData = new Array(3);
  expectedData.fill(expectedElem);

  it('from Github Reest API reponse', () => {
    const respElem = {
      full_name: 'jayjamesjay/gh-trends',
      html_url: '',
      description: 'Loading content for this website...',
      stargazers_count: 100,
      language: 'JavaScript',
      forks: 321,
      license: {
        spdx_id: 'MIT',
      },
    };

    const response = new Array(3);
    response.fill(respElem);

    expect(RepoInfoList.fromGithubRes(response)).toEqual(expectedData);
  });

  it('upates current data', () => {
    const respElem = {
      full_name: 'jayjamesjay/gh-trends',
      html_url: '',
      description: 'Loading content for this website...',
      stargazers_count: 100,
      language: 'JavaScript',
      forks: 321,
      license: {
        spdx_id: 'MIT',
      },
    };
    const response = [respElem];
    const infoList = new RepoInfoList(expectedData, 1);
    const expectedInfoList = new RepoInfoList(expectedData.concat(expectedElem), 2);
    infoList.update(response);

    expect(infoList).toEqual(expectedInfoList);
  });

  it('constructs full with id', () => {
    const page = 1;
    const infoList = new RepoInfoList(expectedData, page);
    const expectedList = {
      data: expectedData,
      page,
    };

    expect(infoList).toEqual(expectedList);
  });
});

describe('<DownloadLink />', () => {
  const name = 'msg.txt';
  const text = `You've just downloaded this text ;)`;
  const title = 'Download message';

  it(`renders with default style`, () => {
    const component = renderer.create(
      <DownloadLink filename={name} content={text} display={title} />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('displays title', () => {
    render(<DownloadLink filename={name} content={text} display={title} />);
    expect(screen.getByRole('link').textContent).toEqual(title);
  });

  it('points to content', () => {
    const data = `data:plain/plain;charset=utf-8,${encodeURIComponent(text)}`;
    render(<DownloadLink filename={name} content={text} display={title} />);

    expect(screen.getByRole('link').href).toEqual(data);
  });
});

it('converts JSON to Markdown', () => {
  const json = [
    { name: 'Dog', length: 1 },
    { name: 'Sharp', length: 22 },
    { name: 'Cat', length: 2 },
  ];

  expect(jsonToMarkdown(json)).toBe(
    '# Dog \r\n' +
      'length: 1 \r\n' +
      '\r\n' +
      '\r\n' +
      '# Sharp \r\n' +
      'length: 22 \r\n' +
      '\r\n' +
      '\r\n' +
      '# Cat \r\n' +
      'length: 2 \r\n' +
      '\r\n' +
      '\r\n'
  );
});
