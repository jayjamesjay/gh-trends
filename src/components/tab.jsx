import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputRadio, LabelTab } from '../styles/input';

export default class Tab extends Component {
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
      <div onClick={onClick} role="radio" aria-checked={checked} onKeyPress={onClick} tabIndex="0">
        <LabelTab active={checked} htmlFor={label}>
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

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
