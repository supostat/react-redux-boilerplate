module.exports = {
  env: {
  browser: true, commonjs: true, es6: true, node: true,
},
"plugins": [
  "react"
],
extends: ["eslint:recommended", "plugin:react/recommended"],
  "parser": "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': 0,
  },
};