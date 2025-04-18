/**
 * @module Url
 */

/**
 * Adds language to query if not already present, with special handling for "All Languages".
 *
 * @param {string} base - current query string
 * @param {string} lang - programming language to be added
 * @returns {string}
 */
export function addLang(base, lang) {
  let result = base;

  if (lang === 'All Languages') {
    const langIdx = base.indexOf(' language:');

    if (langIdx > -1) {
      result = base.slice(0, langIdx);
    }
  } else if (!base.includes(`language:"${lang}"`)) {
    const normalizedLang = lang === 'C++' ? 'cpp' : lang;
    result = `${base} language:"${normalizedLang}"`;
  }

  return result.trim();
}

/**
 * Representation of a URL with configurable query parameters.
 * @class
 */
export default class Url {
  /**
   * Creates a new instance of the Url class.
   *
   * @param {string} api - base URL
   * @returns {Url}
   */
  constructor(api) {
    this.api = api;
    this.queryStr = '';
    this.params = [];
  }

  /**
   * Adds more parameters to this URL's query string.
   *
   * @param {...string} elem - parts of the URL
   * @returns {Url}
   */
  parts(...elem) {
    this.params = this.params.concat(...elem);
    return this;
  }

  /**
   * Sets the full query string, replacing any existing one.
   *
   * @param {string} params - space-separated list of parameters
   * @returns {Url}
   */
  query(params) {
    this.queryStr = params
      .split(' ')
      .map((elem) => elem.trim())
      .filter((elem) => elem !== '')
      .join('+');
    return this;
  }

  /**
   * Adds programming language to the query.
   *
   * @param {string} lang - name of the programming language
   * @returns {Url}
   */
  lang(lang) {
    return this.query(addLang(this.queryStr, lang));
  }

  /**
   * Converts the URL to its string representation.
   *
   * @returns {string} - constructed URL
   */
  toString() {
    const query = `?q=${this.queryStr}`;
    return this.api + [query, ...this.params].join('&');
  }
}
