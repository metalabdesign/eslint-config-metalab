module.exports = {
  plugins: [
    'filenames',
  ],

  rules: {
    // Enforce the idiomatic kebab-case instead of snake_case or PascalCase.
    // There are also sometimes casing issues on different platforms.
    'filenames/filenames': [ 2, '^[a-z0-9.-]+$' ],
  },
};
