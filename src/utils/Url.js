/**
 * @module Url
 */

/**
 * Adds language to query
 *
 * @param {string} base - current query
 * @param {string} lang - language which will be added
 * @returns {string}
 */
export function addLang(base, lang) {
  let result = base;
  let currLang = lang;

  if (lang === 'All Languages') {
    const langIdx = base.indexOf(' language:');

    if (langIdx > -1) {
      result = base.slice(0, langIdx);
    }
  } else if (!base.includes(`language:"${lang}"`)) {
    if (lang === 'C++') {
      currLang = 'cpp';
    }

    result = `${base} language:"${currLang}"`;
  }

  return result;
}

/**
 * Representaion of Url
 * @class
 */
export default class Url {
  /**
   * Creates a Url
   *
   * @param {string} api - base url
   * @returns {Url}
   */
  constructor(api) {
    this.api = api;
    this.queryStr = '';
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
   * @param {string} params - space separated list of parameters
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
   * Adds programming language to query
   *
   * @param {string} lang - programming language
   * @returns {Url}
   */
  lang(lang) {
    return this.query(addLang(this.queryStr, lang));
  }

  toString() {
    const query = `?q=${this.queryStr}`;
    return this.api + [query, ...this.params].join('&');
  }
}
