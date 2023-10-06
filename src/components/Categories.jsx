import React from 'react';
import PropTypes from 'prop-types';

import { CategoryMenu } from '../styles/Form';
import Category from './Category';

/**
 * @module Categories
 */

/**
 * Menu to hadle category selection
 *
 * @property {array} labels - names of categories
 * @property {string} active - name of label which is currently active
 * @property {function} onClick - function called whenever label is clicked
 * @returns {Categories}
 */
export default function Categories({ labels, active, onClick }) {
  return (
    <CategoryMenu>
      {labels.map((label) => (
        <Category checked={active === label} key={label} label={label} onClick={onClick} />
      ))}
    </CategoryMenu>
  );
}

Categories.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
