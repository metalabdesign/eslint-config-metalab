var resolve = require('resolve');

// TODO: This should resolve to the root package.json of the project.
var basedir = module.paths[0];

exports.hasBabel = function() {
  // Determine if we are using babel 7+ or not.
  try {
    resolve.sync('@babel/core', {
      basedir: basedir,
    });
    return true;
  } catch (err) {
    // If we can't load babel then stop caring.
  }
  // Determine if we are using babel 6 or not.
  try {
    resolve.sync('babel-core', {
      basedir: basedir,
    });
    return true;
  } catch (err) {
    // If we can't load babel then stop caring.
  }
  return false;
};

exports.hasBabelResolver = function() {
  // Determine if we are using babel resolver or not.
  try {
    resolve.sync('babel-plugin-module-resolver', {
      basedir: basedir,
    });
    return true;
  } catch (err) {
    // If we can't load babel resolver then stop caring.
  }
  return false;
};
