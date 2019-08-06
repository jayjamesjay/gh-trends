export const defApi = 'https://api.github.com/search/repositories';
export const sort = 'sort=stars';
export const perPage = 'per_page=6';

/**
 * @module Fetch
 */

/**
 * Adds language to query
 *
 * @returns {string}
 */
export function addLang(base, lang) {
  let result = base;

  if (lang === 'C++') {
    result += ' language:"cpp"';
  } else if (lang !== 'all') {
    result += ` language:"${lang}"`;
  }

  return result;
}

/**
 * Representaion of request url to Github API
 * @class
 */
export class Url {
  /**
   * Creates a Url
   *
   * @param {string} api - base url
   */
  constructor(api) {
    this.api = api;
    this.q = '';
    this.params = [];
  }

  /**
   * Adds more parameters to this Url
   *
   * @param {string} elem - part of Url
   * @returns {Url}
   */
  parts(...elem) {
    this.params = this.params.concat(...elem);
    return this;
  }

  /**
   * Adds query string to this Url
   *
   * @param {string} params - query
   * @returns {Url}
   */
  query(params) {
    this.q = params
      .split(' ')
      .map(elem => elem.trim())
      .filter(elem => elem !== '')
      .join('+');
    return this;
  }

  /**
   * Adds programming language to query
   *
   * @param {string} lang - programming language
   * @returns {Url}
   */
  lang(lang) {
    return this.query(addLang(this.q, lang));
  }

  toString() {
    const query = `?q=${this.q}`;
    return this.api + [query, ...this.params].join('&');
  }
}

/**
 * Fetches data and returns JSON response
 *
 * @returns {Promise}
 */
export default function getJSON(url, signal) {
  return fetch(url, { signal }).then(res => res.json());
}
