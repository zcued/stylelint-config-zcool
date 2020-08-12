module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  ignoreFiles: ['**/*.js', '**/*.jsx'],
  rules: {
    'no-descending-specificity': null,
  },
}
