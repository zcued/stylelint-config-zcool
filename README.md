# @zcool/stylelint-config
ZCOOL FE stylelint Configuration. See all stylelint config options [here](https://stylelint.io/).

## Usage
**Install**:
```bash
$ yarn add -D @zcool/style-lint-config stylelint
$ yarn add -D @zcool/style-lint-config-sass stylelint
$ yarn add -D @zcool/style-lint-config-styled-component stylelint
```

**Add `.stylelintrc.js`**
```js
module.exports = {
  extends: '@zcool/stylelint-config/sc',
  rules: {
    'value-keyword-case': null,
  },
}
```

**Remove old `.prettierrc` file**

# 使用lerna的多包管理方案
 [lerna官网](https://lerna.js.org/)

## Contribute
1. fork
2. modify index.json
3. create merge request

## TODO
- separate this package into multiple packages managed by lerna
  - [ ] @zcool/stylelint-config
  - [ ] @zcool/stylelint-config-sc
  - [ ] @zcool/stylelint-config-sass