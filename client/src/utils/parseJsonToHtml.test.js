import parseJsonToHtml from './parseJsonToHtml';

// Mock the dependencies before importing
jest.mock('@tiptap/html', () => ({
  generateHTML: jest.fn(() => '<div>Generated HTML</div>'),
}));

jest.mock('html-react-parser', () => ({
  __esModule: true,
  default: jest.fn(html => `Parsed: ${html}`),
}));

jest.mock('../constants/tiptapExtensions', () => ({
  extensions: [],
}));

describe('parseJsonToHtml Utility', () => {
  test('should handle empty input', () => {
    expect(parseJsonToHtml(null)).toBeDefined();
    expect(parseJsonToHtml(undefined)).toBeDefined();
    expect(parseJsonToHtml('')).toBeDefined();
  });

  test('should handle string input', () => {
    const result = parseJsonToHtml('Simple text');
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
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
    expect(typeof result).toBe('string');
  });
});
