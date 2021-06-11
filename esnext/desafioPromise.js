const fs = require('fs')

const getFile = caminho => 
  new Promise((resolve, reject) => 
    fs.readFile(caminho, 'utf-8', (err, conteudo) => 
      err ? reject(err) : resolve(conteudo)
  ))

const file = __dirname + '/dados.txt'

getFile(file)
  .then(conteudo => console.log(conteudo))
  .catch(e => console.log(e))
