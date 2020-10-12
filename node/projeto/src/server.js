const express = require('express')
const app = express()
const db = require('./database')

app.get('/produtos', (request, response, next) => {
  response.send(db.getProdutos())
})

app.get('/produtos/:id', (request, response, next) => {
  response.send(db.getProduto(request.params.id))
})

app.post('/produtos', (request, response, next) => {
  response.send(db.saveProduto(request.body))
})

const port = 3003
app.listen(port, () => {
  console.log(`Servidor excutando na ${port}`)
})
