var stdin = process.stdin,
  stdout = process.stdout,
  inputChunks = [];

const j = require('../doc/j').children[0];

function stringifyType(x) {
  switch (x.type) {
    case 'reference':
      const { name } = x;
      if (x.typeArguments) {
        return `${name}<${x.typeArguments.map((x) => x.name).join(',')}>`;
      }
      return name;

    case 'reflection':
      const type = (x.declaration.children || []).map(x => `${x.name}: ${stringifyType(x.type)}`).join('; ');
      return `{ ${type} }`;
    case 'intrinsic':
      return x.name;
    case 'union':
      return x.types.map(x=> stringifyType(x)).join(' | ');
    case 'stringLiteral':
      return `"${x.value}"`
    case 'intersection':
      return x.types.map(x=> stringifyType(x)).join(' & ')
    case 'unknown':
      return x.name;

  }

  return '';
}

function stringifyParameters(parameters = []) {
  return parameters
    .map((x) => {
      if (x.type === 'reflection') {
        return stringifyType(x.type);
      }
      return `${x.name}: ${stringifyType(x.type)}`;
    })
    .join(', ');
}

let output = `${j.name}`;
j.groups[2].children
  .map((id) => j.children.find((x) => x.id === id))
  .filter((x) => !x.overwrites && !x.inheritedFrom)
  .map((method) => {
    //todo брать по id

    output +=
      '\n' +
      method.name +
      `(${stringifyParameters(method.signatures[0].parameters)})` +
      ': ' +
      stringifyType(method.signatures[0].type);
  });

console.log(output);

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function(chunk) {
  inputChunks.push(chunk);
});

stdin.on('end', function() {
  var inputJSON = inputChunks.join(''),
    parsedData = JSON.parse(inputJSON),
    outputJSON = JSON.stringify(parsedData, null, '    ');
  stdout.write(outputJSON);
  stdout.write('\n');
});
