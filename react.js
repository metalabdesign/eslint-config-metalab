module.exports = {
  settings: {
    react: {
      pragma: 'createElement',
    },
  },
  extends: [
    './base.js',
    './rules/jsx.js',
    './rules/react.js',
  ].map(require.resolve),
};
