module.exports = {
  plugins: [
    'lodash-fp',
  ],

  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/jfmengels/eslint-plugin-lodash-fp
  rules: {
    // Let people use both `flow` and `compose`.
    'lodash-fp/consistent-compose': 0,

    // Prevent simple errors.
    'lodash-fp/no-argumentless-calls': 2,

    // Chain is bad.™
    // See: https://medium.com/making-internets/9bc1f80d51ba
    'lodash-fp/no-chain': 2,

    // Avoid unnecessary function wrapping.
    'lodash-fp/no-extraneous-function-wrapping': 2,

    // No extraneous parameters in iteratees.
    'lodash-fp/no-extraneous-iteratee-args': 2,

    // Avoid the performance overhead of `compose(f)`.
    'lodash-fp/no-single-composition': 2,

    // Prevent `import {foo} from 'lodash/fp'`. This is here at least until
    // lodash@5 where modules are first-class citizens.
    'lodash-fp/no-submodule-destructuring': 2,

    // Prefer `_.compact` over `_.filter(_.identity)`.
    'lodash-fp/prefer-compact': 2,

    // Prefer `constant(x)` over `function () { return x; }`.
    'lodash-fp/prefer-constant': [2, {arrowFunctions: false}],

    // Prefer `_.flatMap` over consecutive `_.map` and `_.flatten`.
    'lodash-fp/prefer-flat-map': 2,

    // Prefer `get('a.b.c')` over `a && a.b && a.b.c`.
    'lodash-fp/prefer-get': 2,

    // Use `identity` instead of `function (x) { return x; }`.
    'lodash-fp/prefer-identity': [2, {arrowFunctions: false}],

    // Stop people from using legacy `lodash`.
    'lodash-fp/use-fp': 2,
  },
};
