//
// Copyright 2020 DXOS.org
//

// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'semistandard',
    'plugin:@typescript-eslint/recommended',
    'plugin:@rushstack/eslint-plugin-packlets/recommended'
  ],
  // NOTE: Order is important.
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    '@stayradiated/prefer-arrow-functions',
    '@dxos'
  ],
  ignorePatterns: [
    // Binaries
    'bin',
    'main.js',

    // Build Artifacts
    'dist',
    'src/proto/gen/*',

    // Config
    '.eslintrc.js',
    '.mocharc.js',
    'jest.config.js',

    // Dependencies
    'node_modules'
  ],
  rules: {
    '@dxos/comment': 'off',
    '@dxos/header': 'error',

    '@rushstack/packlets/mechanics': ['error'],
    '@rushstack/packlets/circular-deps': ['error'],
    '@stayradiated/prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false
      }
    ],

    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'comma'
        }
      }
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],

    'brace-style': ['error', '1tbs'],
    'curly': ['error', 'all'],
    'func-call-spacing': 'off',
    'import/export': 'off',
    'import/order': ['error', {
      pathGroups: [
        {
          pattern: '@{mui,material-ui}/**',
          group: 'external',
          position: 'after'
        },
        {
          pattern: '@{dxos,braneframe}/**',
          group: 'internal',
          position: 'before'
        }
      ],
      pathGroupsExcludedImportTypes: [
        '@{dxos,braneframe}/**',
        '@{mui,material-ui}/**'
      ],
      'newlines-between': 'always',
      groups: [
        ['builtin', 'external'],
        'internal'
      ],
      alphabetize: {
        order: 'asc'
      }
    }],
    'multiline-ternary': 'off',
    'node/no-callback-literal': 'off',
    'no-extra-parens': 'off',
    'no-lone-blocks': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          '**/dist',
          '**/src/**',
          '!./**',
          '!../**'
        ]
      }
    ],
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true
      }
    ],
    'padded-blocks': 'off',
    'quote-props': 'off',
    'standard/no-callback-literal': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'none',
      }
    ],
  }
};
