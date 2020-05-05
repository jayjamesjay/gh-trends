/**
 * @module Date
 */

/**
 * Adds zero to digits
 *
 * @param {number} val - value to which zero will be added
 * @returns {string}
 */
export const addLeadingZero = val => val.toString().padStart(2, '0');

/**
 * Formats date according to Github Search API standards
 *
 * @param {object} date - object containing information about date
 * @returns {string}
 */
function formatDate(date) {
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());

  return `${date.getFullYear()}-${month}-${day}`;
}

export default formatDate;
