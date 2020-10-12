const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./database')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (request, response, next) => {
  response.send(db.getProdutos())
})

app.get('/produtos/:id', (request, response, next) => {
  response.send(db.getProduto(request.params.id))
})

app.post('/produtos', (request, response, next) => {
  response.send(db.saveProduto(request.body))
})

app.put('/produtos/:id', (request, response, next) => {
  response.send(db.saveProduto({ id: request.params.id, ...request.body }))
})

app.delete('/produtos/:id', (request, response, next) => {
  response.send(db.deleteProduto(request.params.id))
})

const port = 3003
app.listen(port, () => {
  console.log(`Servidor excutando na ${port}`)
})
