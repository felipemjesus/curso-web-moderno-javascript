function criarProduto(nome, preco) {
  return { 
    nome, 
    preco, 
    desconto: 0.1
  }
}

console.log(criarProduto('Notebook', 7299,90))
console.log(criarProduto('Telefone', 1199,90))
