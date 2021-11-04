const recomended = require('./recomended');

module.exports = {
  extends: [
    'plugin:jest/recommended',
  ],
  rules: {
    'jest/valid-expect': 'off'
  }
}
