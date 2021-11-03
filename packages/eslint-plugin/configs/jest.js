const recomended = require('./recomended');

module.exports = {
  ...recomended,
  extends: [
    ...recomended.extends,
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'jest/valid-expect': 'off'
  }
}
