module.exports = {
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parserOptions: {
      parser: "@babel/eslint-parser",
      requireConfigFile: false,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/recommended",
      "plugin:prettier/recommended"
    ],
    plugins: [
      "vue",
      "prettier"
    ],
    rules: {
      "prettier/prettier": ["error", { "endOfLine": "auto" }],
      "linebreak-style": "off",
      "quotes": ["error", "single", { "avoidEscape": true }],
      "semi": ["error", "always"],
      "no-console": "off",
      "no-trailing-spaces": "error",
      "no-unused-vars": "warn",
      "vue/multi-word-component-names": "off" 
    },
    settings: {
      "vue": {
        "version": "detect"
      }
    }
  };
  