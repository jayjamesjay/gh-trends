import RepoInfoList from './RepoInfoList';
import Url from './Url';

/**
 * @module Request
 */

/** Default Github API url */
export const defApi = 'https://api.github.com/search/repositories';
/** Default sorting option */
export const sort = 'sort=stars';
/** Default amount of repositories per page */
export const defPerPage = 'per_page=6';

/**
 * Fetches data and returns promise which resolves with JSON response
 *
 * @param {string} url - request url
 * @returns {Promise}
 */
export async function getJSON(url) {
  const response = await fetch(url.toString());
  return response.json();
}

/** Set of loading states */
export const loadingState = {
  LOADED: 'loaded',
  INPROGRESS: 'in-progress',
  ERORR: 'error',
};

/**
 * Representaion of API request
 * @class
 */
export default class Request {
  /**
   * Creates a Request
   *
   * @param {string} api - base url for API
   * @param {string} perPage - amount of items per page
   * @returns {Request}
   */
  constructor(api = defApi, perPage = defPerPage) {
    this.api = api;
    this.perPage = perPage;
  }

  /**
   * Fetches data and updates dataContainer using dataContainerController.
   * Sends back information about current progress using loadingController.
   *
   * @param {function} loadingController - allows to update loading state
   * @param {RepoInfoList} dataContainer - stores currently loaded data
   * @param {function} dataContainerController - allows to update data
   * @param {string} query - space separated list of query parameters
   */
  async loadData(loadingController, dataContainer, dataContainerController, query) {
    const url = new Url(this.api).query(query).parts(this.perPage, `page=${dataContainer.page}`);
    loadingController(loadingState.INPROGRESS);

    const newList = new RepoInfoList(dataContainer.data, dataContainer.page);
    dataContainerController(newList);

    try {
      const { items } = await getJSON(url);
      newList.update(items);

      dataContainerController(newList);
      loadingController(loadingState.LOADED);
    } catch (error) {
      loadingController(loadingState.ERORR);
    }
  }
}
