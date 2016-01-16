module.exports = {
  extends: [
    './base.js',
    './rules/react.js',
  ].map(require.resolve),
};
