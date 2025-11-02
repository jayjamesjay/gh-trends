import Url, { addLang } from '../../utils/Url';

describe('addLang', () => {
  const query = 'react';
  const queryAlt = 'react language:"JavaScript"';

  it('Any', () => {
    const lang = 'JavaScript';
    expect(addLang(query, lang)).toBe('react language:"JavaScript"');
  });

  it('C++', () => {
    const lang = 'C++';
    expect(addLang(query, lang)).toBe('react language:"cpp"');
  });

  it('All languages', () => {
    const lang = 'All Languages';
    expect(addLang(query, lang)).toBe('react');
  });

  it('All languages - Existing Query', () => {
    const lang = 'All Languages';
    expect(addLang(queryAlt, lang)).toBe('react');
  });
});

describe('<Url />', () => {
  const api = 'https://api.github.com/search/repositories';

  it('creates new', () => {
    const url = new Url(api);

    expect(url.api).toEqual(api);
    expect(url.queryParams).toEqual([]);
    expect(url.search).toEqual('');
  });

  it('adds query parameters', () => {
    const params = ['sort=stars', 'perper_page=10'];
    const url = new Url(api).params(params);

    expect(url.queryParams).toEqual(params);
  });

  it('adds search string', () => {
    const expected = 'react+language:JavaScript';

    {
      const url = new Url(api).searchFor('react     language:JavaScript   ');
      expect(url.search).toEqual(expected);
    }
    {
      const url = new Url(api).searchFor('react language:JavaScript');
      expect(url.search).toEqual(expected);
    }
  });

  it('adds language to query', () => {
    const searchStr = 'react';
    const lang = 'JavaScript';
    const expected = `${searchStr}+language:"${lang}"`;
    const url = new Url(api).searchFor(searchStr).lang(lang);

    expect(url.search).toEqual(expected);
  });

  it('full toString', () => {
    const searchStr = 'react';
    const lang = 'JavaScript';
    const sort = 'sort=stars';

    const url = new Url(api).searchFor(searchStr).lang(lang).params(sort).toString();

    expect(url).toBe(
      'https://api.github.com/search/repositories?q=react+language:"JavaScript"&sort=stars',
    );
  });
});
