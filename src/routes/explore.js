import React, { Component } from "react";
import StandarView from "../components/main";

const query = "sort:stars-desc created:>2019-05-01";
const title = "Trending repos this month";
const description = "Repositories created this month with biggest amount of stars."

export default class Explore extends Component {
  render() {
    return <StandarView query={query} title={title} description={description}/>;
  }
}
