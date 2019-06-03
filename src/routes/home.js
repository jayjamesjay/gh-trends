import React, { Component } from "react";
import StandarView from "../components/main";

const query = "sort:stars-desc created:>2019-05-27";
const title = "Trending repos this week";
const description = "Repositories created this week with biggest amount of stars.";

export default class Home extends Component {
  render() {
    return <StandarView query={query} title={title} description={description}/>;
  }
}
