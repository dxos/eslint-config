const recomended = require('./recomended');

module.exports = {
  ...recomended,
  extends: [
    ...recomended.extends,
    'plugin:react/recommended'
  ],
  rules: {
    ...recomended.rules,
    "react/prop-types": "off"
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
