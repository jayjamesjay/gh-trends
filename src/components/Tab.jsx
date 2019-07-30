import React from 'react';
import PropTypes from 'prop-types';
import { LabelSpan } from '../styles/Span';
import { InputRadio } from '../styles/Input';
import LabelTab from '../styles/Label';

// Single select of tab
export default function Tab({ label, checked, onClick }) {
  function click() {
    onClick(label);
  }

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
