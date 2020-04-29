import typescript from 'rollup-plugin-typescript2';
import pkg from "./package.json";

export default [
  {
    input: './src/OpenAPI.ts',
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      'url',
      'events',
    ],
    output: {
      file: 'build/OpenAPI.js',
      format: 'cjs',
    },
    plugins: [typescript()],
  },
];
