import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: './src/OpenAPI.ts',
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" }
    ],
    plugins: [typescript()],
  },
];
