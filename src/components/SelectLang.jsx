import React from 'react';
import PropTypes from 'prop-types';
import Select from '../styles/Select';
import Option from '../styles/Option';
import { ImgIcon } from '../styles/Img';
import { imgPath } from './Data';

// Language selection
export default function SelectLang({ curr, onSelect, languages, label }) {
  return (
    <>
      <ImgIcon src={`${imgPath}/filter-list.svg`} alt={label} title={label} />
      <Select value={curr} onChange={onSelect} aria-label="Languages">
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
