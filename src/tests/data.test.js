import { jsonToMarkdown } from '../components/data';

test('JSON to Markdown', () => {
  const json = [
    { name: 'Dog', length: 1 },
    { name: 'Sharp', length: 22 },
    { name: 'Cat', length: 2 }
  ];

  expect(jsonToMarkdown(json)).toBe(
    '# Dog \r\n\
length: 1 \r\n\
\r\n\
\r\n\
# Sharp \r\n\
length: 22 \r\n\
\r\n\
\r\n\
# Cat \r\n\
length: 2 \r\n\
\r\n\
\r\n\
'
  );
});
