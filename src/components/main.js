import React, { Component } from "react";
import { Article, Span, H2, List, ListItem, P, Pr } from "./styles";

export class InfoBlock extends Component {
  render() {
    const info = this.props.info;
    const [author, name] = info.nameWithOwner.split("/");
    const topics = info.repositoryTopics.nodes.map((elem, id) => (
      <ListItem key={id}>{elem.topic.name}</ListItem>
    ));
    const topicList = topics.length !== 0 ? <List>{topics}</List> : "";
    const starsCount = info.stargazers.totalCount;
    const language = info.languages.nodes[0].name;
    const bgColor = info.languages.nodes[0].color;

    return (
      <Article bg={bgColor} row={this.props.row} column={this.props.column}>
        <H2>
          <Span>{author}</Span> / {name}
        </H2>
        <P>{info.description}</P>
        {topicList}
        <Pr>Stars: {starsCount}</Pr>
        <Pr>{language}</Pr>
      </Article>
    );
  }
}
