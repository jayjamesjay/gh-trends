import React from 'react';
import PropTypes from 'prop-types';
import StyledSelect from '../styles/Select';
import Option from '../styles/Option';
import { ImgIcon } from '../styles/Img';
import FilterImg from '../assets/img/filter-list.svg';

/**
 * @module Select
 */

/**
 * Language selection
 *
 * @property {string} curr - currently selected language
 * @property {function} onSelect - action fired when language is selected
 * @property {array} languages - list of languages to select from
 * @property {string} label - description of this language selection
 * @returns {SelectLang}
 */
export function SelectLang(props) {
  const { options, label } = props;
  const langs = ['All Languages'].concat(options);

  return (
    <>
      <ImgIcon src={FilterImg} alt={label} title={label} />
      <Select {...props} options={langs} label="Languages" />
    </>
  );
}

SelectLang.propTypes = {
  curr: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired
};

/**
 * General selection
 *
 * @property {string} curr - currently selected option
 * @property {function} onSelect - action fired when option is selected
 * @property {array} options - list of options to select from
 * @property {string} label - description of this language selection
 * @returns {Select}
 */
export default function Select({ curr, onSelect, options, label }) {
  return (
    <StyledSelect value={curr} onChange={onSelect} aria-label={label}>
      {options.map(name => (
        <Option key={name} value={name}>
          {name}
        </Option>
      ))}
    </StyledSelect>
  );
}

Select.propTypes = {
  curr: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired
};
