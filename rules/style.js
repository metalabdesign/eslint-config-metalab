module.exports = {
  rules: {

    // See: http://programmers.stackexchange.com/questions/57
    'indent': [ 2, 2 ],

    // The one true brace style.
    'brace-style': [ 2, '1tbs', {
      allowSingleLine: true,
    } ],

    // Single quotes are faster to type and seem to be a fairly general
    // convention in the JS community.
    'quotes': [ 2, 'single', 'avoid-escape' ],

    // Enforce case guidelines used in Javascript. No variables_like_this or
    // VariablesLikeThis. Thoughts about properties: use an eslint ignore
    // block to marshal bad properties from APIs like foo_bar into foorBar.
    // AirBnB is less strict in this regard.
    'camelcase': 2,

    'comma-spacing': [ 2, {
      before: false,
      after: true,
    } ],

    'comma-style': [ 2, 'last' ],

    // Just convention for a lot of tools; git in particular.
    // See: http://stackoverflow.com/questions/729692
    'eol-last': 2,

    'func-names': 0,

    // Things look nice "{ like: this }" and not "{like:this}".
    'key-spacing': [ 2, {
      beforeColon: false,
      afterColon: true,
    } ],

    'array-bracket-spacing': [ 2, 'always' ],

    // 80 column max in order to fit multiple panes on a screen.
    // TODO: Figure out how to incorporate tab sizing dynamically.
    'max-len': [ 2, 80, 2 ],

    'new-cap': [ 2, {
      newIsCap: true,
      capIsNew: false,
    } ],

    // Prevent pointlessly nested if statements because they're harder to read.
    'no-lonely-if': 2,

    // Who would do this? Honestly.
    'no-mixed-spaces-and-tabs': [ 2, true ],

    // Keep things clean by avoiding unnecessary spacing.
    'no-multiple-empty-lines': 2,

    // Nested ternaries are just plain confusing. Avoiding them keeps the
    // code readable.
    'no-nested-ternary': 2,

    // ?
    'no-new-object': 2,

    // Don't allow people to do stupid looking things like: foo (a, b). They
    // should look like foo(a, b).
    'no-spaced-func': 2,

    // ?
    'no-trailing-spaces': 2,

    // ?
    // See: https://github.com/yannickcr/eslint-plugin-react/issues/86
    'no-extra-parens': 0,

    // There are no such thing as "private" properties. Use closure
    // variables if you really need isolation.
    'no-underscore-dangle': 0,

    // ??
    'one-var': [ 2, 'never' ],

    // ?
    'padded-blocks': [ 2, 'never' ],

    // ?
    'semi': [ 2, 'always' ],

    // ?
    'semi-spacing': [ 2, {
      before: false,
      after: true,
    } ],

    // Enforce whitespace for visual clarity.
    'space-after-keywords': [ 2, 'always' ],

    // ?
    'space-before-blocks': 2,

    // ?
    'space-before-function-paren': [ 2, {
      anonymous: 'never',
      named: 'never',
    } ],

    // ?
    'space-infix-ops': 2,

    // ?
    'space-return-throw-case': 2,

    // Enforce whitespace because it looks nice.
    'spaced-comment': 2,

    // Searching a file for `this` will pickup `_this` but not `self`.
    'consistent-this': [ 2, '_this' ],
  },
};
