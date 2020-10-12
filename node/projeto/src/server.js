const express = require('express')
const app = express()

app.get('/produtos', (request, response, next) => {
  response.send({
    nome: 'Notebook',
    preco: 123.45
  })
})

const port = 3003
app.listen(port, () => {
  console.log(`Servidor excutando na ${port}`)
})
