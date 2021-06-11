// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Ana',
    idade: 45,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Junior',
    idade: 18
  }, {
    nome: 'Carla',
    idade: 20
  }],
  calcularValorSeguro: function() {
    
  }
}

carro.proprietario.endereco.numero = 456
carro['proprietario']['endereco']['logradouro'] = 'Av Ola'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)
console.log(carro.condutores)
