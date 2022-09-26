const fs = require('fs');

async function createFile(fileName, file, options) {
  const _file = fs.writeFileSync(fileName, file, options);
  console.log(_file);
};

let valor = '[{"idFilme": 1, "nomeFilme": "XXX", "anoLancamento": "XXXXXX", "autor": "XXXX" }]';

createFile('teste.json', Buffer.from(valor), 'utf8');
