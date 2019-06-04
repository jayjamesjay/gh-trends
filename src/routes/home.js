import React, { Component } from "react";
import StandarView from "../components/main";
import formatDate from "../components/date";

const weekAgo = new Date();
weekAgo.setDate(weekAgo.getDate() - 7);
const weekAgoStr = formatDate(weekAgo);

const query = `sort:stars-desc created:>${weekAgoStr}`;
const title = "Trending repos this week";
const description = "Repositories created within a week with biggest amount of stars.";

export default class Home extends Component {
  render() {
    return <StandarView query={query} title={title} description={description}/>;
  }
}
