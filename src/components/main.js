import React, { Component } from "react";
import { Article } from "./styles";

export class DataSquare extends Component {
  render() {
    return (
      <Article>
        <h2>{this.props.title}</h2>
        {this.props.content}
      </Article>
    );
  }
}
