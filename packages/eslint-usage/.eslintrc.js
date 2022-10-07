module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // extends === plugins + rules
  extends: [
    // "eslint:recommended",
    // "plugin:@typescript-eslint/recommended"  // plugin: 是规定语法，后面跟要用的插件
    "plugin:clint/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // parser: "@typescript-eslint/parser",
  // plugins: ["@typescript-eslint/eslint-plugin"],
  rules: {
    // 0 off 1 warn 2 error
    quotes: ["error", "double"],
  },
  globals: {
    custom: "writeable",
  },
};
