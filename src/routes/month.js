import React, { Component } from "react";
import StandarView from "../components/main";
import formatDate from "../components/date";

const monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);
const monthAgoStr = formatDate(monthAgo);

const query = `sort:stars-desc created:>2019-05-02`;
const title = "Trending repos this month";
const description = "Repositories created this month with biggest amount of stars."

export default class Month extends Component {
  render() {
    return <StandarView query={query} title={title} description={description}/>;
  }
}
