const yaml = require('@rollup/plugin-yaml');

module.exports = {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [yaml()]
};