import { jsonToMarkdown, RepoInfo } from '../components/Data';

test('JSON to Markdown', () => {
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

test('RepoInfo from Github Reest API reponse', () => {
  const reponse = {
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

  expect(RepoInfo.fromGithubRes(reponse)).toEqual(expected);
});
