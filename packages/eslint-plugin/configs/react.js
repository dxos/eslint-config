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
