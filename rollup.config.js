import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        name: 'r',
        format: 'umd',
        globals: {
          react: 'React',
        },
      },
      {
        file: pkg.module,
        name: 'r',
        format: 'esm',
        globals: {
          react: 'React',
        },
      },
    ],
    external: ['react'],
    plugins: [
      resolve({ extensions: ['.jsx', '.js'] }),
      commonjs(),
      babel({
        exclude: ['node_modules/**'],
      }),
    ],
  },
];
