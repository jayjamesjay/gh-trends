import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CategoryMenu } from '../styles/Form';
import Tab from './Tab';

export function Categories({ labels, active, onClick }) {
  return (
    <CategoryMenu>
      {labels.map(label => (
        <Tab checked={active === label} key={label} label={label} onClick={onClick} />
      ))}
    </CategoryMenu>
  );
}

Categories.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    const { children } = this.props;

    this.state = {
      activeTab: children[0].props.label
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
    const labels = children.map(child => child.props.label);

    return (
      <>
        <Categories labels={labels} onClick={onClickTabItem} active={activeTab} />
        {children.find(child => child.props.label === activeTab).props.children}
      </>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
