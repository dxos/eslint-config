const recomended = require('./recomended');

module.exports = {
  ...recomended,
  extends: [
    ...recomended.extends,
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true
  }
}
