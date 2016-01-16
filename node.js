module.exports = {
  extends: [
    './base.js',
    './rules/node.js',
  ].map(require.resolve),
};
