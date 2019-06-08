const api = new Request("https://api.github.com/graphql");
const token = "TOKEN";

let myHeaders = new Headers();
myHeaders.append("Authorization", "bearer " + token);

const init = {
  method: "POST",
  headers: myHeaders,
  cache: "default",
  body: constructQuery("stars:>1000 sort:stars-desc")
};

function queryFromParts(variables, head, body) {
  return `{\   
    "variables": { ${variables} },\
    "query":"query(${head}) {${body}}"\
  }`;
}

function variables(query) {
  return `"search": "${query}", "type": "REPOSITORY", "count": 9, "topics": 3, "langs": 1`;
}

function variablesAfter(query, cursor) {
  return variables(query).concat(`, "cursor": "${cursor}"`);
}

const head =
  "$search: String!, $type: SearchType!, $count: Int!, $topics: Int!, $langs: Int!";
const headAfter = head + ", $cursor: String!";

const searchHead = variables => `search(${variables})`;

const vars = "query: $search, type: $type, first: $count";
const bodyHead = searchHead(vars);
const bodyHeadAfter = searchHead(vars + ", after: $cursor");

const bodyContent = `{\
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
}}`;

export function constructQuery(search) {
  return queryFromParts(variables(search), head, bodyHead + bodyContent);
}

export function constructQueryAfter(search, cursor) {
  return queryFromParts(
    variablesAfter(search, cursor),
    headAfter,
    bodyHeadAfter + bodyContent
  );
}

export default function getData(search, fn, ...cursor) {
  let config = init;
  init.body = fn(search, ...cursor);

  return fetch(api, config).then(response => response.json());
}
