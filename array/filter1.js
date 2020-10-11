const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad PRO', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
console.log(produtos.filter(p => p.preco > 2400))

const produtosCaros = p => p.preco > 999
const produtosFragis = p => p.fragil
console.log(produtos.filter(produtosCaros).filter(produtosFragis))
