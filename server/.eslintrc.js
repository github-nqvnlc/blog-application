export default {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  plugins: [
    'node',
    'import',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // Prettier integration
    'prettier/prettier': 'error',
    
    // Node.js specific rules
    'node/no-unsupported-features/es-syntax': 'off', // We're using ES modules
    'node/no-missing-import': 'off', // Can cause issues with package imports
    'node/no-unpublished-import': 'off', // Allow dev dependencies in dev files
    
    // General JavaScript rules
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'off', // Console is common in Node.js
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    
    // Import rules
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external', 
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': 'off', // Can cause issues with Node.js modules
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    
    // Error handling
    'no-throw-literal': 'error',
    'prefer-promise-reject-errors': 'error',
    
    // Security
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
        'node/no-unpublished-import': 'off',
      },
    },
  ],
}; 