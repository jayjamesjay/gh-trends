/**
 * @module Date
 */

/**
 * Adds zero to digits
 *
 * @returns {string}
 */
export const addLeadingZero = val => (val.toString().length === 1 ? `0${val}` : `${val}`);

/**
 * Formats date according to Github Search API standards
 *
 * @returns {string}
 */
function formatDate(date) {
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());

  return `${date.getFullYear()}-${month}-${day}`;
}

export default formatDate;
