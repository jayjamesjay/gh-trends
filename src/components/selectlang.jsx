import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelSelect, Select, Option, LabelSpan } from '../styles/form';

export default function SelectLang(props) {
  const { curr, onSelect, languages } = props;

  return (
    <LabelSelect htmlFor="languages" active>
      <LabelSpan>
        Language
        <Select id="languages" value={curr} onChange={onSelect}>
          <Option value="all" defaultValue>
            All
          </Option>
          {languages.map(name => (
            <Option key={name} value={name}>
              {name}
            </Option>
          ))}
        </Select>
      </LabelSpan>
    </LabelSelect>
  );
}

SelectLang.propTypes = {
  curr: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired
};
