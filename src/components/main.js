import React, { Component } from 'react';
import { colors } from './data';
import {
  Article,
  Span,
  TextBlock,
  CategoryMenu,
  Content,
} from '../styles/main';
import { H1, H2, MainHeader } from '../styles/headers';
import { Img, ImgInline } from '../styles/img';
import { P, PAlt, PClean } from '../styles/paragraph';
import { ButtonMain, ButtonAdd } from '../styles/button';
import { InputRadio, LabelTab } from '../styles/input';
import { LinkA } from '../styles/link';

export class InfoBlock extends Component {
  constructor(props) {
    super(props);
  }

  save = () => {
    const { info, save } = this.props;
    save(info);
  };

  render() {
    const info = this.props.info;
    const [author, name] = info.nameWithOwner.split('/');
    const starsCount = info.stargazersCount;
    const language = info.language;
    const license = info.license ? `License: ${info.license}` : '';
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
        <PClean>Forks: {info.forks}</PClean>
        <PClean>{license}</PClean>
        <ButtonAdd onClick={this.save}>
          {this.props.saved ? (
            <Img
              src="./assets/img/delete.svg"
              alt="Remove from saved"
              title="Remove from saved"
            />
          ) : (
            <Img
              src="./assets/img/add-saved.svg"
              alt="Add to saved"
              title="Add to saved"
            />
          )}
        </ButtonAdd>
        <TextBlock>
          <PAlt>
            {starsCount}
            <ImgInline src="./assets/img/stars.svg" alt="Stars" />
          </PAlt>
          <PAlt>{language}</PAlt>
        </TextBlock>
      </Article>
    );
  }
}

export class Categories extends Component {
  render() {
    const {
      props: { labels, active, onClick },
    } = this;

    return (
      <CategoryMenu>
        {labels.map(label => {
          return (
            <Tab
              checked={active === label}
              key={label}
              label={label}
              onClick={onClick}
            />
          );
        })}
      </CategoryMenu>
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
                  checked={activeTab === label}
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
  render() {
    return (
      <Content>
        {this.props.data.map((node, id) => {
          const saved =
            this.props.saved.findIndex(
              item => item.nameWithOwner == node.nameWithOwner
            ) > -1;
          return (
            <InfoBlock
              key={id}
              info={node}
              save={this.props.save}
              saved={saved}
            />
          );
        })}
      </Content>
    );
  }
}

export class ViewSingle extends Component {
  render() {
    return (
      <>
        <View
          data={this.props.data}
          save={this.props.save}
          saved={this.props.saved}
        />
        <footer>
          <ButtonMain
            visible={this.props.data.length > 0}
            onClick={this.props.loadData}
          >
            Show more
          </ButtonMain>
        </footer>
      </>
    );
  }
}

export class ViewId extends Component {
  loadData = () => {
    this.props.loadData(this.props.id);
  };

  render() {
    return (
      <ViewSingle
        data={this.props.data}
        loadData={this.loadData}
        save={this.props.save}
        saved={this.props.saved}
      />
    );
  }
}
