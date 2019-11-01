import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: [
    'react',
    'styled-components',
    '@component-library/button',
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    peerDepsExternal({
      includeDependencies: false,
    }),
    resolve({
      extensions: ['.js', '.jsx', '.json'],
      // preferBuiltins: false
    })
  ]
};