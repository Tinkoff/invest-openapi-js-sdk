import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: './src/domain.d.ts',
    output: {
      file: 'build/domain.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
  {
    input: './src/OpenAPI.ts',
    output: {
      file: 'build/openApi.js',
      format: 'cjs',
    },
    plugins: [typescript()],
  },
];
