module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-lonely-if': 'error',
    'no-return-assign': 'error',
    'no-unused-vars': 'warn',
    'prefer-object-spread': 'error',
    'no-bitwise': 'error',
    'sort-imports': ['warn', { ignoreDeclarationSort: true, ignoreCase: true }],
    'import/extensions': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 0,
    'import/order': ['warn'],
  },
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx'] } },
  },
}
