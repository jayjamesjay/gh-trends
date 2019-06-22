//Adds zero to digits
const addLeadingZero = val => (val.toString().length === 1 ? `0${val}` : val);

//Formats date according to Github Search API standards
export default function formatDate(date) {
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());

  return `${date.getFullYear()}-${month}-${day}`;
}
