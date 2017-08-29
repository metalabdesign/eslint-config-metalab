module.exports = {
  // Use the power of babel for parsing. This allows for use of newer versions
  // of Javascript and things like JSX. It provides a more consistent experience
  // than trying to use eslint's native `espree`.
  // See: https://github.com/babel/babel-eslint
  parser: require.resolve('babel-eslint'),
};
