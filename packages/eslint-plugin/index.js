//
// Copyright 2020 DXOS.org
//

module.exports = {
  rules: {
    comment: require('./rules/comment'),
    header: require('./rules/header')
  },
  configs: {
    jest: require('./configs/jest'),
    react: require('./configs/react'),
    recomended: require('./configs/recomended')
  }
}
