module.exports = {
  extends: [
    './rules/browser.js',
  ].map(require.resolve),
};
