# @zcool/stylelint-config
ZCOOL FE stylelint Configuration. See all stylelint config options [here](https://stylelint.io/).

## Usage
**Install**:
```bash
$ yarn add -D @zcool/stylelint-config stylelint
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

## Contribute
1. fork
2. modify index.json
3. create merge request

## TODO
- separate this package into multiple packages managed by lerna
  - [ ] @zcool/stylelint-config
  - [ ] @zcool/stylelint-config-sc
  - [ ] @zcool/stylelint-config-sass