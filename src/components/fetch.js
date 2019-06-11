export const api = 'https://api.github.com/search/repositories';
export const sort = 'sort=stars';
export const perPage = 'per_page=6';

export function query(params) {
  const query = params
    .split(' ')
    .map(elem => elem.trim())
    .filter(elem => elem !== '')
    .join('+');
  return `?q=${query}`;
}

export function requestUrl(apiUrl, ...params) {
  return apiUrl + [...params].join('&');
}

export default function getJSON(url) {
  return fetch(url).then(res => res.json());
}
