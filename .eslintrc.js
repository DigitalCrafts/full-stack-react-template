module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es2021: true,
    node: true,
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-lonely-if': 'error',
    'no-return-assign': 'error',
    'no-unused-vars': 'warn',
    'prefer-object-spread': 'error',
    'no-bitwise': 'error',
    'sort-imports': ['warn', { ignoreDeclarationSort: true, ignoreCase: true }],
    'import/extensions': ['error', { extensions: ['.js'] }],
    'import/prefer-default-export': 0,
    'import/order': ['warn'],
    'no-var': 'warn',
    'prefer-const': 'warn',
  },
}
