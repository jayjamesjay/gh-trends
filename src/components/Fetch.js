export const defApi = 'https://api.github.com/search/repositories';
export const sort = 'sort=stars';
export const perPage = 'per_page=6';

// Adds language to query
export function addLang(base, lang) {
  let result = base;

  if (lang === 'C++') {
    result += ' language:"cpp"';
  } else if (lang !== 'all') {
    result += ` language:"${lang}"`;
  }

  return result;
}

// Representaion of request url to Github API
export class Url {
  constructor(api) {
    this.api = api;
    this.q = '';
    this.params = [];
  }

  // Adds more parameters to this Url
  parts(...elem) {
    this.params = this.params.concat(...elem);
    return this;
  }

  // Adds query string to this Url
  query(params) {
    this.q = params
      .split(' ')
      .map(elem => elem.trim())
      .filter(elem => elem !== '')
      .join('+');
    return this;
  }

  // Adds programming language to query
  lang(lang) {
    return this.query(addLang(this.q, lang));
  }

  toString() {
    const query = `?q=${this.q}`;
    return this.api + [query, ...this.params].join('&');
  }
}

// Fetches data and returns JSON response
export default function getJSON(url, signal) {
  return fetch(url, { signal }).then(res => res.json());
}
