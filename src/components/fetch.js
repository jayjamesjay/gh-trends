export const api = 'https://api.github.com/search/repositories';
export const order = 'order=desc';
export const sort = 'sort=stars';
export const perPage = 'per_page=6';

export function query(params) {
  return `?q=${params}`;
}

export function requestUrl(apiUrl, ...params) {
  return apiUrl + [...params].join('&');
}

export default function getJSON(url) {
  return fetch(url).then(res => res.json());
}
