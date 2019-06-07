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
  LinkA,
  CategoryMenu,
  InputRadio,
  LabelTab,
  MainHeader
} from "./styles";

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

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <article>
        <MainHeader>
          <H1>Trending repos</H1>
          <CategoryMenu>
            {children.map(child => {
              const { label } = child.props;

              return (
                <Tab
                  checked={activeTab === label ? true : false}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })}
          </CategoryMenu>
        </MainHeader>
        {children.find(child => child.props.label === activeTab).props.children}
      </article>
    );
  }
}

export class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { checked, label }
    } = this;

    return (
      <div onClick={onClick}>
        <LabelTab active={checked} htmlFor={label}>
          {label}
        </LabelTab>
        <InputRadio name={label} type="radio" value={label} checked={checked} onChange={onClick} />
      </div>
    );
  }
}
