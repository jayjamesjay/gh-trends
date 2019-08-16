import RepoInfoList from './Data';

/**
 * @module Fetch
 */

/**
 * Default Github API url
 */
export const defApi = 'https://api.github.com/search/repositories';
/**
 * Default sorting option
 */
export const sort = 'sort=stars';
/**
 * Default amount of repositories per page
 */
export const perPage = 'per_page=6';

/**
 * Adds language to query
 *
 * @param {string} base - current query
 * @param {string} lang - language which will be added
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
 * @param {string} url - request url
 * @param {object} signal - AbortSignal object instance used to communicate with/abort a request
 * @returns {Promise}
 */
function getJSON(url, signal) {
  return fetch(url, { signal }).then(res => res.json());
}

/**
 * Fetches data and saves it as RepoInfoList using callback
 *
 * @param {RepoInfoList} infoList - current information list (id, data, page)
 * @param {Url} url - request url
 * @param {object} signal - AbortSignal object instance used to communicate with/abort a request
 * @param {function} callback - function called on fetched data
 * @returns {Promise}
 */
export function makeRequest(infoList, url, signal, callback) {
  let { data, page } = infoList;
  const preUrl = url;

  if (page > 1) {
    preUrl.parts(`page=${page + 1}`);
  }

  const urlStr = preUrl.toString();

  return getJSON(urlStr, signal)
    .then(result => {
      data = data.concat(RepoInfoList.fromGithubRes(result.items));
      page += 1;

      callback(new RepoInfoList(infoList.id, data, page));
    })
    .catch(() => {});
}

export default getJSON;
