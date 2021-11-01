const recomended = require('./recomended');

module.exports = {
  ...recomended,
  extends: [
    ...recomended.extends,
    'plugin:react/recommended'
  ],
  rules: {
    ...recomended.rules,
    '@typescript-eslint/no-use-before-define': 'error',
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'no-use-before-define': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': ['error', {
      'namedComponents': 'arrow-function',
      'unnamedComponents': 'arrow-function'
    }],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop'
    ],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never'
    }],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line'
    }],
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true
  }
}
