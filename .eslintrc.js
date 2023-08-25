/* eslint-disable comma-dangle */
module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['**/generated/*'],
  plugins: ['unused-imports'],
  rules: {
    'linebreak-style': 0,
    'unused-imports/no-unused-imports-ts': 'error',
    'react/function-component-definition': [2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/anchor-is-valid': 'off',
  },

};
