// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock IntersectionObserver which is not available in test environment
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock window.matchMedia which is not available in test environment
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock ResizeObserver which is not available in test environment
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock scrollTo
global.scrollTo = jest.fn();

// Mock problematic ES modules
jest.mock('lowlight', () => ({
  lowlight: {
    highlight: (language, code) => ({
      value: code,
      language: language,
      children: [],
    }),
    highlightAuto: code => ({
      value: code,
      language: 'auto',
      children: [],
    }),
    listLanguages: () => ['javascript', 'css', 'html', 'python'],
  },
}));

// Mock axios
jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} })),
    delete: jest.fn(() => Promise.resolve({ data: {} })),
    patch: jest.fn(() => Promise.resolve({ data: {} })),
  },
}));

// Mock @tiptap/html
jest.mock('@tiptap/html', () => ({
  generateHTML: jest.fn(json => {
    if (!json) return '<div>Empty content</div>';
    if (typeof json === 'string') return json;
    if (json && json.content) return '<div>Mocked HTML content</div>';
    return '<div>Default content</div>';
  }),
}));

// Mock html-react-parser
jest.mock('html-react-parser', () => ({
  __esModule: true,
  default: jest.fn(html => {
    if (!html) return '<div>Empty parsed content</div>';
    if (typeof html === 'string') return `<div>Parsed: ${html}</div>`;
    return '<div>Parsed content</div>';
  }),
}));

// Mock tiptapExtensions
jest.mock('./constants/tiptapExtensions', () => ({
  extensions: [],
}));

// Mock @uidotdev/usehooks
jest.mock('@uidotdev/usehooks', () => ({
  useWindowSize: jest.fn(() => ({ width: 1024, height: 768 })),
  useLocalStorage: jest.fn(() => [null, jest.fn()]),
  useSessionStorage: jest.fn(() => [null, jest.fn()]),
  usePrevious: jest.fn(() => undefined),
  useToggle: jest.fn(() => [false, jest.fn()]),
}));
