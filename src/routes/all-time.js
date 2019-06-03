import React, { Component } from "react";
import StandarView from "../components/main";

const query = "stars:>1000 sort:stars-desc";
const title = "The most trending repos of all-time";
const description = "Repositories that gained biggest amount of stars all-time."

export default class AllTime extends Component {
  render() {
    return <StandarView query={query} title={title} description={description}/>;
  }
}