module.exports = {
  'src/*.{js,jsx,ts,tsx}': ['npm run lint:fix', 'git add'],
  '{*.{json,md}}': ['prettier --write', 'git add'],
};
