module.exports = {
  extends: [
    './rules/node.js',
  ].map(require.resolve),
};
