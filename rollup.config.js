import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const globals = {
  react: 'React',
  'styled-components': 'styled',
};

const external = [
  'react',
  'styled-components',
];

const plugins = [
  resolve(),
  babel({
    plugins: ["@babel/plugin-proposal-class-properties"],
    exclude: 'node_modules/**',
  }),
  commonjs()
];

export default [
  {
    input: 'src/index.js',
    external,
    plugins,
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'shared-components',
      globals,
    },
  },
  {
    input: 'src/index.js',
    external: external.concat('ms'),
    plugins,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        name: 'shared-components',
        globals,
      },
      {
        file: pkg.module,
        format: 'es',
        name: 'shared-components',
        globals,
      },
    ]
  }
]
