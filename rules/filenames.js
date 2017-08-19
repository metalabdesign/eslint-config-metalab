module.exports = {
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/selaux/eslint-plugin-filenames
  rules: {
    // The filename should match whatever is being exported. This seems to be
    // a common pattern used in a lot of JS projects and libraries right now.
    // https://github.com/selaux/eslint-plugin-filenames
    'metalab/filenames/match-exported': [2, null, '\\..*$'],
  },
};
