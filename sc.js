// lint config for styled-component
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  processors: ['stylelint-processor-styled-components'],
  rules: {
    'no-descending-specificity': null,
  },
}
