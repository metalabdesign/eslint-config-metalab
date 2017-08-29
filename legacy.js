var resolve = require('resolve');
var Plugins = require(resolve.sync('eslint/lib/config/plugins', {
  basedir: module.parent.paths[0],
}));
var plugin = require('./plugin');

var load = Plugins.prototype.load;
Plugins.prototype.load = function(name) {
  if (name !== 'metalab') {
    load.call(this, name);
    return;
  }
  this.define('metalab', plugin);
};

module.exports = {
  plugins: ['metalab'],
  extends: [
    './rules/best-practices.js',
    './rules/docs.js',
    './rules/errors.js',
    './rules/filenames.js',
    './rules/style.js',
  ].map(require.resolve),
};
