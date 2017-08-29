module.exports = {
  // For complete listing of rules and what they do, check out the docs.
  // See: https://github.com/yannickcr/eslint-plugin-react/docs/rules
  rules: {
    // Enforce boolean value consistency. Prefer the format that aligns with the
    // HTML5 spec and requires less typing.
    'metalab/react/jsx-boolean-value': 2,

    // Make it so that people don't have their closing tags all over the place.
    'metalab/react/jsx-closing-bracket-location': [2, 'tag-aligned'],

    // Ensure consistency in property styling. Either all single line or all
    // multi-line.
    'metalab/react/jsx-first-prop-new-line': [2, 'multiline'],

    // Keep consistent with the normal indentation style.
    'metalab/react/jsx-indent-props': [2, 2],

    // This rules can help you locate potential ReferenceErrors resulting from
    // misspellings or missing components. Akin to `no-undef`.
    'metalab/react/jsx-no-undef': 2,

    // Ensure consistent component naming that aligns with community standards.
    // Component's should be `NamedLikeThis`, `notLikeThis` and `NOTLIKETHIS`.
    'metalab/react/jsx-pascal-case': 2,

    // Don't be super-pedantic about requiring sorted properties. There may be
    // logical orderings that are not alphabetical.
    'metalab/react/jsx-sort-props': 0,

    // This is necessary for `no-unused-vars` to work. It ensures that when JSX
    // consumes variables they are marked as "used".
    'metalab/react/jsx-uses-vars': 2,

    // Components without children can be self-closed to avoid unnecessary extra
    // closing tag. Ensures consistency and saves space.
    'metalab/react/self-closing-comp': 2,

    // Enforce multi-line JSX to be enclosed with (). This provides more legible
    // JSX syntax where tag aligment happens on indentation boundaries for the
    // opening and closing tag.
    'metalab/react/jsx-wrap-multilines': 2,

    // Don't let people do silly things.
    'metalab/react/jsx-equals-spacing': [2, 'never'],
  },
};
