const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const json = require('rollup-plugin-json');

const ceva  = {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: [
    'react',
    'styled-components',
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
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

export default ceva;