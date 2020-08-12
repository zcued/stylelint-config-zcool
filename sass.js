module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  ignoreFiles: ['**/*.js', '**/*.jsx'],
  rules: {
    'no-descending-specificity': null,
  },
}
