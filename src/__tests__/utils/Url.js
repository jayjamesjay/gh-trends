import Url, { addLang } from '../../utils/Url';

describe('addLang', () => {
  const query = 'react';

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
});

describe('<Url />', () => {
  const api = 'https://api.github.com/search/repositories';

  it('creates new', () => {
    const url = new Url(api);

    expect(url.api).toEqual(api);
    expect(url.params).toEqual([]);
    expect(url.queryStr).toEqual('');
  });

  it('adds parts', () => {
    const params = ['sort=stars', 'perper_page=10'];
    const url = new Url(api).parts(params);

    expect(url.params).toEqual(params);
  });

  it('adds query', () => {
    const expected = 'react+language:JavaScript';

    {
      const url = new Url(api).query('react     language:JavaScript   ');
      expect(url.queryStr).toEqual(expected);
    }
    {
      const url = new Url(api).query('react language:JavaScript');
      expect(url.queryStr).toEqual(expected);
    }
  });

  it('adds language to query', () => {
    const query = 'react';
    const lang = 'JavaScript';
    const expected = `${query}+language:"${lang}"`;
    const url = new Url(api).query(query).lang(lang);

    expect(url.queryStr).toEqual(expected);
  });

  it('full toString', () => {
    const query = 'react';
    const lang = 'JavaScript';
    const sort = 'sort=stars';

    const url = new Url(api).query(query).lang(lang).parts(sort).toString();

    expect(url).toBe(
      'https://api.github.com/search/repositories?q=react+language:"JavaScript"&sort=stars',
    );
  });
});
