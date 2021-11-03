const recomended = require('./recomended');

module.exports = {
  ...recomended,
  extends: [
    ...recomended.extends,
    'plugin:jest/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    ...recomended.rules,
    'jest/valid-expect': 'off'
  }
}
