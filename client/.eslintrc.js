module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prefer-const": "error",
    "no-var": "error",
  },
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx", "**/*.spec.js", "**/*.spec.jsx"],
      env: {
        jest: true,
      },
      rules: {
        "no-console": "off",
      },
    },
  ],
}; 