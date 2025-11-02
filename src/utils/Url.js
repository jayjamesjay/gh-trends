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
    this.search = '';
    this.queryParams = [];
  }

  /**
   * Adds more parameters to this URL's query.
   *
   * @param {...string} elem - parts of the URL
   * @returns {Url}
   */
  params(...elem) {
    this.queryParams = this.queryParams.concat(...elem);
    return this;
  }

  /**
   * Sets the search string, replacing any existing one.
   *
   * @param {string} searchStr - space-separated list of parameters
   * @returns {Url}
   */
  searchFor(searchStr) {
    this.search = searchStr
      .split(' ')
      .map((elem) => elem.trim())
      .filter((elem) => elem !== '')
      .join('+');
    return this;
  }

  /**
   * Adds programming language to the search string.
   *
   * @param {string} lang - name of the programming language
   * @returns {Url}
   */
  lang(lang) {
    let currentSearchStr = this.search.split('+').join(' ');
    let expandedSearchStr = addLang(currentSearchStr, lang);
    return this.searchFor(expandedSearchStr);
  }

  /**
   * Converts the URL to its string representation.
   *
   * @returns {string} - constructed URL
   */
  toString() {
    const query = `?q=${this.search}`;
    return this.api + [query, ...this.queryParams].join('&');
  }
}
