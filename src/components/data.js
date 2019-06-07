import formatDate from "../components/date";

const weekAgo = new Date();
weekAgo.setDate(weekAgo.getDate() - 8);
const queryWeek = `sort:stars-desc created:>${formatDate(weekAgo)}`;

const monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);
const queryMonth = `sort:stars-desc created:>${formatDate(monthAgo)}`;

const queryAllTime = "stars:>1000 sort:stars-desc";
export const queryList = [queryWeek, queryMonth, queryAllTime];

const fill = {
  nameWithOwner: "jayjamesjay/gh-trends",
  url: "",
  description: "Loading content for this website...",
  stargazers: {
    totalCount: 123
  },
  repositoryTopics: {
    nodes: [
      {
        topic: {
          name: "Just"
        }
      },
      {
        topic: {
          name: "a"
        }
      },
      {
        topic: {
          name: "moment"
        }
      }
    ]
  },
  languages: {
    nodes: []
  }
};

export const initData = new Array(9);
initData.fill(fill, 0, 9);

export default class Data {
  constructor(id, data, cursor) {
    this.id = id;
    this.data = data;
    this.cursor = cursor;
  }
}