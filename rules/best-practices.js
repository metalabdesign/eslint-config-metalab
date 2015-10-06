module.exports = {
  "rules": {
    // ----------------------------------------------------------------------
    // Best practices
    // ----------------------------------------------------------------------

    // http://eslint.org/docs/rules/consistent-return
    "consistent-return": 2,

    // http://eslint.org/docs/rules/curly
    "curly": [2, "multi-line"],

    // Enforce a reasonable cap on functions spiralling out of control
    // with many branches.
    "complexity": [2, 10],

    // If you have a switch block you should always cover all possible cases.
    // Since Javascript has a shit type system we have to have a default case
    // to check everything.
    // http://eslint.org/docs/rules/default-case
    "default-case": 2,

    // http://eslint.org/docs/rules/dot-notation
    "dot-notation": [2, {
      "allowKeywords": true
    }],

    // http://eslint.org/docs/rules/eqeqeq
    "eqeqeq": 2,

    // http://eslint.org/docs/rules/guard-for-in
    "guard-for-in": 2,

    // http://eslint.org/docs/rules/no-caller
    "no-caller": 2,

    // http://eslint.org/docs/rules/no-else-return
    "no-else-return": 2,

    // http://eslint.org/docs/rules/no-eq-null
    "no-eq-null": 0,

    // http://eslint.org/docs/rules/no-eval
    "no-eval": 2,

    // http://eslint.org/docs/rules/no-extend-native
    "no-extend-native": 2,

    // http://eslint.org/docs/rules/no-extra-bind
    "no-extra-bind": 2,

    // http://eslint.org/docs/rules/no-fallthrough
    "no-fallthrough": 2,

    // Don't allow people to do dumb things like "1." when they mean "1.0".
    // http://eslint.org/docs/rules/no-floating-decimal
    "no-floating-decimal": 2,

    // http://eslint.org/docs/rules/no-implied-eval
    "no-implied-eval": 2,

    // http://eslint.org/docs/rules/no-lone-blocks
    "no-lone-blocks": 2,

    // http://eslint.org/docs/rules/no-loop-func
    "no-loop-func": 2,

    // http://eslint.org/docs/rules/no-multi-str
    "no-multi-str": 2,

    // http://eslint.org/docs/rules/no-native-reassign
    "no-native-reassign": 2,

    // http://eslint.org/docs/rules/no-new
    "no-new": 2,

    // http://eslint.org/docs/rules/no-new-func
    "no-new-func": 2,

    // http://eslint.org/docs/rules/no-new-wrappers
    "no-new-wrappers": 2,

    // http://eslint.org/docs/rules/no-octal
    "no-octal": 2,

    // http://eslint.org/docs/rules/no-octal-escape
    "no-octal-escape": 2,

    // http://eslint.org/docs/rules/no-param-reassign
    "no-param-reassign": 2,

    // http://eslint.org/docs/rules/no-proto
    "no-proto": 2,

    // http://eslint.org/docs/rules/no-redeclare
    "no-redeclare": 2,

    // http://eslint.org/docs/rules/no-return-assign
    "no-return-assign": 2,

    // http://eslint.org/docs/rules/no-script-url
    "no-script-url": 2,

    // http://eslint.org/docs/rules/no-self-compare
    "no-self-compare": 2,

    // http://eslint.org/docs/rules/no-sequences
    "no-sequences": 2,

    // Always want to throw `Error` objects for stack traces.
    // http://eslint.org/docs/rules/no-throw-literal
    "no-throw-literal": 2,

    // http://eslint.org/docs/rules/no-with
    "no-with": 2,

    // Prevent weird behavior from `parseInt`.
    // See: http://stackoverflow.com/questions/850341
    // http://eslint.org/docs/rules/radix
    "radix": 2,

    // ?
    // http://eslint.org/docs/rules/vars-on-top
    "vars-on-top": 2,

    // Avoid pitfalls when trying to call a just-declared function.
    // http://eslint.org/docs/rules/wrap-iife
    "wrap-iife": [2, "any"],

    // ??
    // http://eslint.org/docs/rules/yoda
    "yoda": 2,
  }
};
