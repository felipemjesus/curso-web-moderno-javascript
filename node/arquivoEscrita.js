const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 4999.90,
  desconto: 0.10
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!')
})
