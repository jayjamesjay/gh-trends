/**
 * @module RepoInfo
 */

/**
 * Information about repository
 * @class
 */
class RepoInfo {
  /**
   * Creates a RepoInfo
   *
   * @param {string} nameWithOwner - name and author of repository
   * @param {string} url - url of the repository
   * @param {string} description - description
   * @param {number} stargazersCount - amount of stars
   * @param {string} language - programming language
   * @param {number} forks - amount of forks
   * @param {string} license - repository license
   */
  constructor(nameWithOwner, url, description, stargazersCount, language, forks, license) {
    this.nameWithOwner = nameWithOwner;
    this.url = url;
    this.description = description;
    this.stargazersCount = stargazersCount;
    this.language = language;
    this.forks = forks;
    this.license = license;
  }

  /**
   * Creates RepoInfo from Github API data
   *
   * @param {object} item - repository data from Github API
   * @returns {RepoInfo}
   */
  static fromGithubRes(item) {
    const { description, language, forks } = item;
    const license = item.license ? item.license.spdx_id : null;

    return new RepoInfo(
      item.full_name,
      item.html_url,
      description,
      item.stargazers_count,
      language,
      forks,
      license
    );
  }
}

export default RepoInfo;
