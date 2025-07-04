module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }], // Example Prettier rules
  },
};
