import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { LabelSpan } from '../styles/Span';
import { InputRadio } from '../styles/Input';
import LabelTab from '../styles/Label';

/**
 * @module Tab
 */

/**
 * Single tab selector
 *
 * @property {string} label - name of the tab
 * @property {boolean} checked - determinates if tab is active
 * @property {function} onClick - function fired when tab is clicked
 * @returns {Tab}
 */
export default function Tab({ label, checked, onClick }) {
  const click = useCallback(() => onClick(label), [label, onClick]);

  return (
    <div onClick={click} role="radio" aria-checked={checked} onKeyPress={click} tabIndex="0">
      <LabelTab active={checked} htmlFor={label}>
        <LabelSpan>{label}</LabelSpan>
      </LabelTab>
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

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
