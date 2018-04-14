module.exports = {
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/eslint/eslint/tree/master/docs/rules
  rules: {
    // If a variable is never modified, using the `const` declaration is better.
    // `const` declaration tells readers, "this variable is never modified,"
    // reducing cognitive load and improving maintainability.
    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': 2,

    // Modifying variables that are declared using const keyword will raise a
    // runtime error. So catch this at check time instead of runtime because
    // seeing errors sooner is better than later.
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 2,

    // If there are declarations of the same name in class members, the last
    // declaration overwrites other declarations silently. It can cause
    // unexpected behaviors. This is basically the ES6 version of ES5's
    // rule: `no-dupe-keys`.
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 2,

    // In ES6 prefer `let` or `const` because they are block scoped (which is
    // infiniteley more clear than function scoping), and also ensures the
    // reader knows if the variable is intended to be modified or not. It also
    // makes to highlight low-hanging fruit where large groups of `let` can be
    // refactored into `const`.
    // http://eslint.org/docs/rules/no-var
    'no-var': 2,

    // Use template literals instead of string concatenation. Eventually smart
    // compiler optimizations will make these kinds of operations faster than
    // just dumb concatenation.
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 2,

    // Prettier enforces the use of double quotes. So that's what we have here.
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [2, 'prefer-double'],
  },
  env: {
    // Add globals for `Promise` and friends.
    es6: true,
  },
};
