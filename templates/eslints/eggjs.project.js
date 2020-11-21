/**
 * kinlong eslint推荐vue.project
 */
module.exports = {
  root: true,
  parserOptions: {
    project: '../tsconfigs/eggjs.json',
  },
  extends: ['eslint-config-egg/typescript'],
  rules: require('./rules/recommended'),
};
