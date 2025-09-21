// lint-staged.config.js
module.exports = {
  '**/*': ['next lint .'],
  '*.{ts,tsx}': [() => 'tsc --noEmit --incremental false'],
  '**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0 --no-warn-ignored', 'prettier -w'],
  '**/*.{json,css,scss,md}': ['prettier -w'],
};
