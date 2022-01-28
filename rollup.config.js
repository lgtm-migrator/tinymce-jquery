const swag = require('@ephox/swag');

export default {
  input: 'lib/main/ts/Main.js',
  output: {
    file: 'dist/index.js',
    format: 'iife'
  },
  treeshake: true,
  onwarn: swag.onwarn,
  plugins: [
    swag.nodeResolve({
      basedir: __dirname,
      prefixes: {}
    }),
    swag.remapImports()
  ]
};