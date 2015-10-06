module.exports = {
  "plugins": [
    "react"
  ],
  "rules": {
    "react/display-name": 0,
    "react/jsx-boolean-value": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-uses-react": [2, {
      "pragma": "createElement"
    }],
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": [2, "allow-in-func"],
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 0,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 0,
    "react/sort-comp": [2, {
      "order": [
        "displayName",
        "propTypes",
        "contextTypes",
        "childContextTypes",
        "mixins",
        "statics",
        "defaultProps",
        "constructor",
        "getDefaultProps",
        "getInitialState",
        "state",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "/^on.+$/",
        "/^handle.+$/",
        "/^get.+$/",
        "/^update.+$/",
        "everything-else",
        "/^render.+$/",
        "render"
      ]
    }]
  }
}
