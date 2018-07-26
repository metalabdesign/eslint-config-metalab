/* eslint vars-on-top: 0 */
/* eslint guard-for-in: 0 */

var plugins = {
  import: 'eslint-plugin-import',
  react: 'eslint-plugin-react',
  filenames: 'eslint-plugin-filenames',
  babel: 'eslint-plugin-babel',
  flowtype: 'eslint-plugin-flowtype',
  'jsx-a11y': 'eslint-plugin-jsx-a11y',
  prettier: 'eslint-plugin-prettier',
};

for (var key in plugins) {
  plugins[key] = require(plugins[key]);
}

var newRules = {};

for (var plugin in plugins) {
  var rules = plugins[plugin].rules;
  for (var rule in rules) {
    newRules[plugin + '/' + rule] = rules[rule];
  }
}

module.exports = {
  rules: newRules,
};
