import { query, requestUrl } from '../components/fetch';

test('transforms search input into query', () => {
  expect(query('react language:JavaScript')).toBe(
    '?q=react+language:JavaScript'
  );
  expect(query('react     language:JavaScript   ')).toBe(
    '?q=react+language:JavaScript'
  );
});

test('creates url for request', () => {
  const query = '?q=react+language:JavaScript';
  const api = 'https://api.github.com/search/repositories';
  const sort = 'sort=stars';

  expect(requestUrl(api, query, sort)).toBe(
    'https://api.github.com/search/repositories?q=react+language:JavaScript&sort=stars'
  );
});
