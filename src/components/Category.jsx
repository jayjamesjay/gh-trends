import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { LabelSpan } from '../styles/Span';
import { InputRadio } from '../styles/Input';
import LabelCategory from '../styles/Label';

/**
 * @module Category
 */

/**
 * Single category selector
 *
 * @property {string} label - name of the category
 * @property {boolean} checked - determinates if category is active
 * @property {function} onClick - function fired when category is clicked
 * @returns {Category}
 */
export default function Category({ label, checked, onClick }) {
  const click = useCallback(() => onClick(label), [label, onClick]);

  return (
    <div onClick={click} role="radio" aria-checked={checked} onKeyPress={click} tabIndex="0">
      <LabelCategory active={checked} htmlFor={label}>
        <LabelSpan>{label}</LabelSpan>
      </LabelCategory>
      <InputRadio
        id={label}
        type="radio"
        value={label}
        checked={checked}
        onChange={click}
        tabIndex="-1"
      />
    </div>
  );
}

Category.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
