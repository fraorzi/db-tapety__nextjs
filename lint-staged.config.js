// lint-staged.config.js
module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0 --no-warn-ignored', 'prettier -w'],
  '*.{ts,tsx}': [() => 'tsc --noEmit --incremental false'],
  '**/*.{json,css,scss,md}': ['prettier -w'],
};
