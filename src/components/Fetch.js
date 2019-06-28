export const defApi = 'https://api.github.com/search/repositories';
export const sort = 'sort=stars';
export const perPage = 'per_page=6';

// Adds language to query
export function addLang(base, lang) {
  if (lang === 'C++') {
    return `${base} language:"cpp"`;
  }
  if (lang !== 'all') {
    return `${base} language:"${lang}"`;
  }
  return base;
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

  // Adds language to query
  lang(lang) {
    return this.query(addLang(this.q, lang));
  }

  toString() {
    const query = `?q=${this.q}`;
    return this.api + [query, ...this.params].join('&');
  }
}

// Fetches data and returns JSON response
export default function getJSON(url) {
  return fetch(url).then(res => res.json());
}
