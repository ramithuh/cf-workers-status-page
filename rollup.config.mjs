import yaml from '@rollup/plugin-yaml';

export default {
  input: './src/functions/cronTrigger.js',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    yaml({
      transform: (data) => data
    })
  ]
}