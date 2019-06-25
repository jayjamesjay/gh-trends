import { Url, addLang } from '../components/Fetch';

test('adds search to Url', () => {
  const expected = 'react+language:JavaScript';
  const url = new Url('').query('react language:JavaScript');
  const url2 = new Url('').query('react     language:JavaScript   ');

  expect(url.q).toBe(expected);
  expect(url2.q).toBe(expected);
});

test('adds parameters to Url', () => {
  const query = 'react';
  const api = 'https://api.github.com/search/repositories';
  const params = ['sort=stars', 'perper_page=10'];

  const url = new Url(api)
    .query(query)
    .parts(params);

  expect(url.params).toEqual(params);
});

test('creates Url for request', () => {
  const query = 'react';
  const lang = 'JavaScript';
  const api = 'https://api.github.com/search/repositories';
  const sort = 'sort=stars';

  const url = new Url(api)
    .query(query)
    .lang(lang)
    .parts(sort)
    .toString();

  expect(url).toBe(
    'https://api.github.com/search/repositories?q=react+language:"JavaScript"&sort=stars'
  );
});

test('Adds language', () => {
  const query = 'react';
  const lang = 'JavaScript';

  expect(addLang(query, lang)).toBe('react language:"JavaScript"');
});
