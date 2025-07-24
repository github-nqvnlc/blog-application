import { parseJsonToHtml } from './parseJsonToHtml';

describe('parseJsonToHtml Utility', () => {
  test('should handle empty input', () => {
    expect(parseJsonToHtml(null)).toBeDefined();
    expect(parseJsonToHtml(undefined)).toBeDefined();
    expect(parseJsonToHtml('')).toBeDefined();
  });

  test('should handle string input', () => {
    const result = parseJsonToHtml('Simple text');
    expect(result).toBeDefined();
  });

  test('should handle object input', () => {
    const testObject = {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Hello world',
            },
          ],
        },
      ],
    };

    const result = parseJsonToHtml(testObject);
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
  });

  test('should handle array input', () => {
    const testArray = [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: 'Test content',
          },
        ],
      },
    ];

    const result = parseJsonToHtml(testArray);
    expect(result).toBeDefined();
  });
});
