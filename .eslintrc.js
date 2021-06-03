module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      project: "./tsconfig.json"
    },
    plugins: [
      "@typescript-eslint",
      "enterprise-extras",
    ],
    rules: {
      "enterprise-extras/no-href-assignment": "error",
      "enterprise-extras/private-component-methods": "error",
      "enterprise-extras/no-unhandled-scheduling": "error",
    },
  };