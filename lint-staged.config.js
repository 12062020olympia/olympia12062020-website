module.exports = {
  '*.{js,jsx,ts,tsx}': ['npm run lint:fix', 'git add'],
  '*.{css,scss}': ['prettier --write', 'stylelint --fix', 'git add'],
  '{*.{json,md}}': ['prettier --write', 'git add'],
};
