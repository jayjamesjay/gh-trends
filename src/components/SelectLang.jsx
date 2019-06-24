import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '../styles/Select';
import Option from '../styles/Option';
import { ImgIcon } from '../styles/Img';

export default function SelectLang({ curr, onSelect, languages, label }) {
  return (
    <>
      <ImgIcon src="./assets/img/filter-list.svg" alt={label} title={label} />
      <Select value={curr} onChange={onSelect}>
        <Option value="all" defaultValue>
          All
        </Option>
        {languages.map(name => (
          <Option key={name} value={name}>
            {name}
          </Option>
        ))}
      </Select>
    </>
  );
}

SelectLang.propTypes = {
  curr: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired
};
