import formatDate from '../components/Date';

test('formats date', () => {
  const date = new Date(2019, 5, 2);

  expect(formatDate(date)).toBe('2019-06-02');
});
