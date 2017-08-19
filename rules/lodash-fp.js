module.exports = {
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/jfmengels/eslint-plugin-lodash-fp
  rules: {
    // Let people use both `flow` and `compose`.
    'metalab/lodash-fp/consistent-compose': 0,

    // Prevent simple errors.
    'metalab/lodash-fp/no-argumentless-calls': 2,

    // Chain is bad.™
    // See: https://medium.com/making-internets/9bc1f80d51ba
    'metalab/lodash-fp/no-chain': 2,

    // Avoid unnecessary function wrapping.
    'metalab/lodash-fp/no-extraneous-function-wrapping': 0,

    // No extraneous parameters in iteratees.
    'metalab/lodash-fp/no-extraneous-iteratee-args': 2,

    // Avoid the performance overhead of `compose(f)`.
    'metalab/lodash-fp/no-single-composition': 2,

    // Prevent `import {foo} from 'lodash/fp'`. This is here at least until
    // lodash@5 where modules are first-class citizens.
    'metalab/lodash-fp/no-submodule-destructuring': 2,

    // Prefer `_.compact` over `_.filter(_.identity)`.
    'metalab/lodash-fp/prefer-compact': 2,

    // Prefer `constant(x)` over `function () { return x; }`.
    'metalab/lodash-fp/prefer-constant': [2, {arrowFunctions: false}],

    // Prefer `_.flatMap` over consecutive `_.map` and `_.flatten`.
    'metalab/lodash-fp/prefer-flat-map': 2,

    // Prefer `get('a.b.c')` over `a && a.b && a.b.c`.
    'metalab/lodash-fp/prefer-get': 2,

    // Use `identity` instead of `function (x) { return x; }`.
    'metalab/lodash-fp/prefer-identity': [2, {arrowFunctions: false}],

    // Stop people from using legacy `lodash`.
    'metalab/lodash-fp/use-fp': 2,
  },
};
