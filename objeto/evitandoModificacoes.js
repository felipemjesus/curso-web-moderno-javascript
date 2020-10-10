// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: 'Arroz',
  preco: 50.99,
  tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Feijão'
produto.descricao = 'Delicia'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {
  nome: 'Ana',
  idade: 30
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 28
console.log(pessoa)

// Object.freeze = selado + valores constantes
