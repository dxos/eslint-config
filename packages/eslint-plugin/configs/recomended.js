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
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    'prefer-arrow',
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
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'curly': ['error', 'all'],
    'brace-style': ['error', '1tbs'],
    'func-call-spacing': 'off',
    'import/order': ['error', {
      pathGroups: [
        {
          pattern: '@{mui,material-ui}/**',
          group: 'external',
          position: 'after'
        },
        {
          pattern: '@{dxos,wirelineio}/**',
          group: 'internal',
          position: 'before'
        }
      ],
      pathGroupsExcludedImportTypes: ['@{dxos,wirelineio}/**', '@{mui,material-ui}/**'],
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
    'no-unused-expressions': 'off',
    'no-useless-constructor': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true
      }
    ],
    'padded-blocks': 'off',
    'quote-props': 'off',
    'import/export': 'off',
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
    'no-use-before-define': 'off',
    'node/no-callback-literal': 'off',
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
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: false,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ]
  }
};
