module.exports = {
  hooks: {
    'pre-commit': ['npm run type-check && lint-staged'],
  },
};
