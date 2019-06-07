const api = new Request("https://api.github.com/graphql");
const token = "TOKEN";

let myHeaders = new Headers();
myHeaders.append("Authorization", "bearer " + token);

const queryContent = `\
pageInfo {\
  endCursor\
},\
nodes { ... on Repository {\
  nameWithOwner, url, description, stargazers {totalCount},\
  repositoryTopics(first: $topics) {\
    nodes {\
      topic {\
        name\
      }\
    }\
  },\
  languages(first: $langs) {\
    nodes {\
      name,\
      color\
    }\
  }\
} \
}}}"}`;

export const constructQuery = query =>
  `{ \
  "variables": { \
      "name": "${query}",\
      "type": "REPOSITORY",\
      "count": 9,\
      "topics": 3,\
      "langs": 1\
  },\
  "query": "query($name: String!, $type: SearchType!, $count: Int!, $topics: Int!, $langs: Int!) {\
    search(query: $name, type: $type, first: $count) {` + queryContent;

export const constructQueryAfter = (query, cursor) =>
  `{ \
    "variables": { \
        "name": "${query}",\
        "type": "REPOSITORY",\
        "count": 12,\
        "topics": 3,\
        "langs": 1,\
        "cursor": "${cursor}"\
    },\
    "query": "query($name: String!, $type: SearchType!, $count: Int!, $topics: Int!, $langs: Int!, $cursor: String!) {\
      search(query: $name, type: $type, first: $count, after: $cursor) {` +
  queryContent;

const init = {
  method: "POST",
  headers: myHeaders,
  cache: "default",
  body: constructQuery("stars:>1000 sort:stars-desc")
};

export default function getData(search, fn, ...cursor) {
  let config = init;
  init.body = fn(search, ...cursor);

  return fetch(api, config).then(response => response.json());
}
