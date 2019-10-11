module.exports = {
  excludeExternals: true,
  entryPoint: './src/',
  out: './doc/',
  mode: 'file',
  excludePrivate: true,
  includeDeclarations: true,
  plugin: [ 'typedoc-plugin-markdown','typedoc-plugin-no-inherit', 'typedoc-plugin-fixcomputednames']
};