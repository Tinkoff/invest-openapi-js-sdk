import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: './src/domain.ts',
    output: {
      file: 'build/domain.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
  {
    input: './src/OpenAPI.ts',
    output: {
      file: 'build/OpenAPI.js',
      format: 'cjs',
    },
    plugins: [typescript()],
  },
];
