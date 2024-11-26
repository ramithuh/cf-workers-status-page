const yaml = require('@rollup/plugin-yaml');

module.exports = {
  input: './src/functions/cronTrigger.js',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [yaml()]
};