module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }]
  },
};
