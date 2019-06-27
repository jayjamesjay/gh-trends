import RepoInfoList, { jsonToMarkdown, RepoInfo } from '../components/Data';

it('creates RepoInfo from one element of Github Reest API reponse array', () => {
  const response = {
    full_name: 'jayjamesjay/gh-trends',
    html_url: '',
    description: 'Loading content for this website...',
    stargazers_count: 100,
    language: 'JavaScript',
    forks: 321,
    license: {
      spdx_id: 'MIT'
    }
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

it('creates RepoInfoList from Github Reest API reponse', () => {
  const respElem = {
    full_name: 'jayjamesjay/gh-trends',
    html_url: '',
    description: 'Loading content for this website...',
    stargazers_count: 100,
    language: 'JavaScript',
    forks: 321,
    license: {
      spdx_id: 'MIT'
    }
  };

  const response = new Array(3);
  response.fill(respElem);

  const expectedElem = new RepoInfo(
    'jayjamesjay/gh-trends',
    '',
    'Loading content for this website...',
    100,
    'JavaScript',
    321,
    'MIT'
  );

  const expected = new Array(3);
  expected.fill(expectedElem);

  expect(RepoInfoList.fromGithubRes(response)).toEqual(expected);
});

it('converts JSON to Markdown', () => {
  const json = [
    { name: 'Dog', length: 1 },
    { name: 'Sharp', length: 22 },
    { name: 'Cat', length: 2 }
  ];

  expect(jsonToMarkdown(json)).toBe(
    '# Dog \r\n\
length: 1 \r\n\
\r\n\
\r\n\
# Sharp \r\n\
length: 22 \r\n\
\r\n\
\r\n\
# Cat \r\n\
length: 2 \r\n\
\r\n\
\r\n\
'
  );
});
