module.exports = {
  extends: ['prettier', 'react-app'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
