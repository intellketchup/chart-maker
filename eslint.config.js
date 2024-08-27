// eslint.config.js
const js = require("@eslint/js");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");
const security = require("eslint-plugin-security");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      security,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "security/detect-object-injection": "off", // Personaliza las reglas según sea necesario
    },
  },
];
