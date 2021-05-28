module.exports = {
  root: true,
  extends: [
    '@c0nd3mnd/eslint-config-typescript',
    'plugin:vue/vue3-recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  env: {
    node: true
  }
}
