module.exports = {
  extends: [
    './legacy.js',
    './rules/babel.js',
    './rules/modern.js',
  ].map(require.resolve),
};
