import formatDate, { addLeadingZero } from '../../utils/Date';

it('adds leading zero', () => {
  expect(addLeadingZero(9)).toBe('09');
  expect(addLeadingZero(12)).toBe('12');
});

it('formats date', () => {
  {
    const date = new Date(2019, 5, 2);
    expect(formatDate(date)).toBe('2019-06-02');
  }
  {
    const date = new Date(2019, 11, 1);
    expect(formatDate(date)).toBe('2019-12-01');
  }
});
