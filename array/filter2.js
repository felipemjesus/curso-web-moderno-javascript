Array.prototype.filter2 = function(callback) {
  const result = []
  for(let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
}

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad PRO', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
console.log(produtos.filter2(p => p.preco > 2400))

const produtosCaros = p => p.preco > 999
const produtosFragis = p => p.fragil
console.log(produtos.filter2(produtosCaros).filter2(produtosFragis))
