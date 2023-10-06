import RepoInfo from './RepoInfo';
/**
 * @module RepoInfoList
 */

/**
 * List of information about repositories
 * @class
 */
class RepoInfoList {
  /**
   * Creates a RepoInfoList
   *
   * @param {array} data - main content
   * @param {number} page - last loaded page
   */
  constructor(data, page) {
    this.data = data;
    this.page = page;
  }

  /**
   * Creates data part of RepoInfoList from Github API data
   *
   * @param {array} data - list of repository data from Github API
   * @returns {array}
   */
  static fromGithubRes(data) {
    return data.map((item) => RepoInfo.fromGithubRes(item));
  }

  /**
   * Parses and adds Github API data to this RepoInfoList
   * and increases the page by 1.
   *
   * @param {array} data - list of repository data from Github API
   */
  update(data) {
    const content = RepoInfoList.fromGithubRes(data);
    this.data = this.data.concat(content);
    this.page += 1;
  }
}

export default RepoInfoList;
