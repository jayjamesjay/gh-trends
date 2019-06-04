import React, { Component } from "react";
import {
  Article,
  Span,
  H1,
  H2,
  List,
  ListItem,
  P,
  Pr,
  Content,
  ButtonMain,
  LinkA,
  MainHeader
} from "./styles";
import getData, { query, queryAfter } from "../components/fetch";

export class InfoBlock extends Component {
  render() {
    const info = this.props.info;
    const [author, name] = info.nameWithOwner.split("/");
    const topics = info.repositoryTopics.nodes.map((elem, id) => (
      <ListItem key={id}>{elem.topic.name}</ListItem>
    ));
    const topicList = topics.length !== 0 ? <List>{topics}</List> : "";
    const starsCount = info.stargazers.totalCount;
    let language = "";
    let bgColor = "#fff";

    if (info.languages.nodes.length > 0) {
      language = info.languages.nodes[0].name;
      bgColor = info.languages.nodes[0].color;
    }

    return (
      <Article bg={bgColor}>
        <H2>
          <LinkA href={info.url}>
            <Span>{author}</Span> / {name}
          </LinkA>
        </H2>
        <P>{info.description}</P>
        {topicList}
        <Pr>
          <p>Stars: {starsCount}</p>
          <p>{language}</p>
        </Pr>
      </Article>
    );
  }
}

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

const initData = new Array(9);
initData.fill(fill, 0, 9);

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initData,
      cursor: ""
    };
  }

  componentDidMount() {
    this._asyncRequest = getData(this.props.query, query).then(result => {
      this._asyncRequest = null;
      this.setState({
        data: result.data.search.nodes,
        cursor: result.data.search.pageInfo.endCursor
      });
    });
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  loadData = () => {
    getData(this.props.query, queryAfter, this.state.cursor).then(result => {
      this.setState({
        data: this.state.data.slice().concat(result.data.search.nodes),
        cursor: result.data.search.pageInfo.endCursor
      });
    });
  };

  render() {
    return (
      <>
        <MainHeader>
          <H1>{this.props.title}</H1>
          <p>{this.props.description}</p>
        </MainHeader>
        <Content>
          {this.state.data.map((node, id) => (
            <InfoBlock key={id} info={node} />
          ))}
        </Content>
        <ButtonMain onClick={this.loadData}>Show more</ButtonMain>
      </>
    );
  }
}
