var hasBabel = require('../util/babel').hasBabel();
var hasBabelResolver = require('../util/babel').hasBabelResolver();
var chalk = require('chalk');

module.exports = {
  settings: {},

  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/benmosher/eslint-plugin-import
  rules: {
    // Automatically detect unresolvable modules. Catching errors earlier is
    // always better.
    // https://github.com/benmosher/eslint-plugin-import#no-unresolved
    'metalab/import/no-unresolved': 2,

    // Ensure named imports correspond to a named export in the imported file.
    // Catching errors earlier is always better.
    // https://github.com/benmosher/eslint-plugin-import#named
    'metalab/import/named': 2,

    // This, unfortunately, does not work with webpack + PostCSS modules.
    // https://github.com/benmosher/eslint-plugin-import#default
    'metalab/import/default': 0,

    // Always prefere ES6 `import` unless explicitly disabled due to comment.
    // https://github.com/benmosher/eslint-plugin-import#no-require
    'metalab/import/no-commonjs': 2,
    'metalab/import/no-amd': 2,

    // All imports should come first, since they're hoisted to the top by
    // babel automatically anyway.
    // https://github.com/benmosher/eslint-plugin-import#imports-first
    'metalab/import/imports-first': 2,

    // No point in importing things twice.
    // https://github.com/benmosher/eslint-plugin-import#no-duplicates
    'metalab/import/no-duplicates': 2,

    // Report any invalid exports, e.g. a re-export of the same name.
    // https://github.com/benmosher/eslint-plugin-import#export
    'metalab/import/export': 2,
  },
};

// If using babel, then be sure to parse the code as ES6.
if (hasBabel) {
  module.exports.settings['import/parser'] = require.resolve('babel-eslint');
  if (hasBabelResolver) {
    if (
      typeof require('babel-plugin-module-resolver').resolvePath !== 'function'
    ) {
      // eslint-disable-next-line no-console
      console.log(
        chalk.red('error'),
        'babel-plugin-module-resolver ^3 required\n'
      );
      process.exit(1);
    }
    module.exports.settings['import/resolver'] = {};
    module.exports.settings['import/resolver'][
      require.resolve('eslint-import-resolver-babel-module')
    ] = {};
  }
}
