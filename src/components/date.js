const addLeadingZero = val => {
  return val.toString().length === 1 ? '0' + val : val;
};

export default function formatDate(date) {
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());

  return `${date.getFullYear()}-${month}-${day}`;
}
