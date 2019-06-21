export const api = 'https://api.github.com/search/repositories';
export const sort = 'sort=stars';
export const perPage = 'per_page=6';

//Creates query string for Github API
export function query(params) {
  const search = params
    .split(' ')
    .map(elem => elem.trim())
    .filter(elem => elem !== '')
    .join('+');
  return `?q=${search}`;
}

//Creates url for request to Github API
export function requestUrl(apiUrl, ...params) {
  return apiUrl + [...params].join('&');
}

//Fetches data and returns JSON response
export default function getJSON(url) {
  return fetch(url).then(res => res.json());
}
