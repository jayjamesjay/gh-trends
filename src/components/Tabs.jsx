import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CategoryMenu } from '../styles/Form';
import Tab from './Tab';

// Menu to hadle tab selection
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

// Tab selection and display currently selected tab
export default function Tabs({ children }) {
  const labels = children.map(child => child.props.label);
  const [activeTab, setActive] = React.useState(labels[0]);

  function onClickTabItem(tab) {
    setActive(tab);
  }

  return (
    <>
      <Categories labels={labels} onClick={onClickTabItem} active={activeTab} />
      {children.find(child => child.props.label === activeTab).props.children}
    </>
  );
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
