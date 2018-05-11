module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: [
    'html',
    'node',
    'import',
    'promise'
  ],
  rules: {
    'eol-last': 0,
    'prefer-promise-reject-errors': 0,
    'no-trailing-spaces': 0
  }
}
