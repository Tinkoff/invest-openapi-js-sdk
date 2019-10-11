module.exports = {
  excludeExternals: true,
  entryPoint: './src/',
  out: './doc/',
  mode: 'file',
  json: './doc/j.json',
  excludePrivate: true,
  includeDeclarations: true,
  plugin: [ 'typedoc-plugin-markdown','typedoc-plugin-no-inherit']
};