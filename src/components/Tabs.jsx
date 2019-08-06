import React from 'react';
import PropTypes from 'prop-types';
import { CategoryMenu } from '../styles/Form';
import Tab from './Tab';

/**
 * @module Tabs
 */

/**
 * Menu to hadle tab selection
 *
 * @property {array} labels - names of categories
 * @property {string} active - name of label which is currently active
 * @property {function} onClick - function called whenever label is clicked
 * @returns {Categories}
 */
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

/**
 * Shows tab selection and display currently selected tab
 *
 * @property {array} children - children of Tabs element
 * @returns {Tabs}
 */
export default function Tabs({ children }) {
  const labels = children.map(child => child.props.label);
  const [activeTab, setActive] = React.useState(labels[0]);

  return (
    <>
      <Categories labels={labels} onClick={setActive} active={activeTab} />
      {children.find(child => child.props.label === activeTab).props.children}
    </>
  );
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
