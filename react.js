module.exports = {
  extends: [
    './base.js',
    './rules/jsx.js',
    './rules/jsx-a11y.js',
    './rules/react.js',
  ].map(require.resolve),
};
