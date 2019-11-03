const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const json = require('rollup-plugin-json');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
    },
    {
      file: 'lib/index.es.js',
      format: 'es',
    }
  ],
  external: [
    'react',
    'styled-components',
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }),
    commonjs(),
    peerDepsExternal({
      includeDependencies: false,
    }),
    resolve({
      extensions: ['.js', '.jsx', '.json'],
    }),
    json()
  ]
};
