module.exports = {
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/eslint/eslint/tree/master/docs/rules
  rules: {
    // Enforce good documentation. Reduce the mental burden for when other
    // people try to understand or consume your code.
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [
      2,
      {
        prefer: {
          return: 'returns',
        },
      },
    ],
  },
};
