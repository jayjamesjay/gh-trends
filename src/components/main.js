import React, { Component } from 'react';
import { colors } from './data';
import {
  Article,
  Span,
  H1,
  H2,
  P,
  Pr,
  LinkA,
  CategoryMenu,
  InputRadio,
  LabelTab,
  MainHeader,
  Content,
  ButtonMain,
} from './styles';

export class InfoBlock extends Component {
  render() {
    const info = this.props.info;
    const [author, name] = info.nameWithOwner.split('/');
    const topicList = '';
    const starsCount = info.stargazersCount;
    const language = info.language;
    let color;

    if (colors.hasOwnProperty(language)) {
      color = colors[language];
    } else {
      color = '#fff';
    }

    return (
      <Article bg={color}>
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
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
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
      props: { checked, label },
    } = this;

    return (
      <div onClick={onClick}>
        <LabelTab
          active={checked}
          htmlFor={label}
          tabIndex="0"
          onKeyPress={onClick}
        >
          {label}
        </LabelTab>
        <InputRadio
          id={label}
          type="radio"
          value={label}
          checked={checked}
          onChange={onClick}
          tabIndex="-1"
        />
      </div>
    );
  }
}

export class View extends Component {
  onClick = () => {
    this.props.loadData(this.props.id);
  };

  render() {
    return (
      <>
        <Content>
          {this.props.data.map((node, id) => (
            <InfoBlock key={id} info={node} />
          ))}
        </Content>
        <footer>
          <ButtonMain
            visible={this.props.data.length > 0}
            onClick={this.onClick}
          >
            Show more
          </ButtonMain>
        </footer>
      </>
    );
  }
}

export class SearchView extends Component {
  render() {
    return (
      <View id="search" data={this.props.data} loadData={this.props.loadData} />
    );
  }
}
