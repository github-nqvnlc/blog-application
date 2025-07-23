import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    rules: {
      // General JavaScript rules
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off', // Console is common in Node.js
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',

      // Error handling
      'no-throw-literal': 'error',

      // Security
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',

      // Code style
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'brace-style': ['error', '1tbs'],
    },
  },
  {
    ignores: [
      // Dependencies
      'node_modules/',

      // Build outputs
      'dist/',
      'build/',

      // Uploads directory (user generated content)
      'uploads/',

      // Environment files
      '.env*',

      // Logs
      'logs/',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',

      // Coverage directory
      'coverage/',
      '.nyc_output',

      // Dependency directories
      'jspm_packages/',

      // Optional npm cache directory
      '.npm',

      // Optional REPL history
      '.node_repl_history',

      // Output of 'npm pack'
      '*.tgz',

      // Yarn Integrity file
      '.yarn-integrity',

      // Generated files
      '*.min.js',
      '*.bundle.js',

      // Database files
      '*.db',
      '*.sqlite',

      // Temporary files
      'tmp/',
      'temp/',
    ],
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      'no-console': 'off',
    },
  },
];
