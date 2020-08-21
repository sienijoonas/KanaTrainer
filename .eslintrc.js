module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'no-use-before-define': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'sort-imports': 2,
    'react/prop-types': 0,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js','.jsx','.ts','.tsx']
      }
    }
  }
};
