//
// Copyright 2020 DXOS.org
//

// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-patch/modern-module-resolution");

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
    '@dxos'
  ],
  rules: {
    '@dxos/comment': 'off',
    '@dxos/header': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    "unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": [
			"error",
			{
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "none",
      }
		],
    'curly': ['error', 'all'],
    'brace-style': ['error', '1tbs'],
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
    'quote-props': 'off',
    'import/export': 'off',
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['off'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'standard/no-callback-literal': 'off',
    'node/no-callback-literal': 'off',
    'jest/no-conditional-expect': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['**/dist']
      }
    ],
    'jest/valid-expect': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
  }
};
