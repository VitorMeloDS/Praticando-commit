const fs = require('fs');

function createFile(fileName, file, options) {
  const _file = fs.writeFileSync(fileName, file, options);
  console.log(_file);
};

const valor = {
  idFilme: 1,
  nomeFilme: 'XXX',
  anoLancamento: 'XXXXXX',
  autor: 'XXXX',
};

createFile('teste.json', JSON.parse(valor), 'utf8');
