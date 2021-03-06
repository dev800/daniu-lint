module.exports = {
  semi: ['error', 'always'],
  'vue-scoped-css/no-unused-selector': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1, maxEOF: 1 }],
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/ban-types': 'off',
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-this-alias': [
    'error',
    {
      allowDestructuring: true, // Allow `const { props, state } = this`; false by default
      allowedNames: ['self'], // Allow `const self = this`; `[]` by default
    },
  ],
};
