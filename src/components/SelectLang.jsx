import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelSelect, Select, Option, LabelSpan } from '../styles/Form';

export default function SelectLang({ curr, onSelect, languages, label }) {
  return (
    <LabelSelect htmlFor="languages" active>
      <LabelSpan>
        {label}
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
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired
};
