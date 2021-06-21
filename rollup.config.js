import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: './src/OpenAPI.ts',
    external: ['isomorphic-fetch', 'ws', 'url', 'events'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [typescript()],
  },
];
