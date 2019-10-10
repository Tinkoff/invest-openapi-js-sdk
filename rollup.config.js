import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/OpenAPI.ts',
  output: {
    file: 'build/openApi.js',
    format: 'cjs'
  },
  plugins: [
    typescript()
  ]
}