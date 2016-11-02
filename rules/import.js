var hasBabel = false;

// Determine if we are using babel or not.
try {
  require.resolve('babel-eslint');
  hasBabel = true;
} catch (err) {
  // If we can't load babel then stop caring.
}

module.exports = {
  plugins: [
    'import',
  ],

  settings: {},

  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/benmosher/eslint-plugin-import
  rules: {
    // Automatically detect unresolvable modules. Catching errors earlier is
    // always better.
    // https://github.com/benmosher/eslint-plugin-import#no-unresolved
    'import/no-unresolved': 2,

    // Ensure named imports correspond to a named export in the imported file.
    // Catching errors earlier is always better.
    // https://github.com/benmosher/eslint-plugin-import#named
    'import/named': 2,

    // This, unfortunately, does not work with webpack + PostCSS modules.
    // https://github.com/benmosher/eslint-plugin-import#default
    'import/default': 0,

    // Always prefere ES6 `import` unless explicitly disabled due to comment.
    // https://github.com/benmosher/eslint-plugin-import#no-require
    'import/no-commonjs': 2,
    'import/no-amd': 2,

    // All imports should come first, since they're hoisted to the top by
    // babel automatically anyway.
    // https://github.com/benmosher/eslint-plugin-import#imports-first
    'import/imports-first': 2,

    // No point in importing things twice.
    // https://github.com/benmosher/eslint-plugin-import#no-duplicates
    'import/no-duplicates': 2,

    // Report any invalid exports, e.g. a re-export of the same name.
    // https://github.com/benmosher/eslint-plugin-import#export
    'import/export': 2,
  },
};

// If using babel, then be sure to parse the code as ES6.
if (hasBabel) {
  module.exports.settings['import/parser'] = require.resolve('babel-eslint');
  module.exports.settings['import/resolver'] =
    require.resolve('eslint-import-resolver-babel-module');
}
