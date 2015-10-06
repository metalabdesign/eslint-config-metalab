var hasBabel = false;

try {
  require.resolve('babel-eslint');
  hasBabel = true;
} catch(err) {

}

module.exports = {
  "plugins": [
    "import"
  ],

  "settings": {
    "import/resolve": {
      "moduleDirectory": [
        "node_modules",
        "./src"
      ]
    }
  },

  "rules": {
    "import/no-unresolved": 2,
    "import/named": 2,
    "import/default": 0,
    "import/no-require": 2,
    "import/imports-first": [2, "absolute-first"],
    "import/no-duplicates": 2,
    "import/export": 2
  }
};

if (hasBabel) {
  module.exports.settings['import/parser'] = 'babel-eslint';
}
