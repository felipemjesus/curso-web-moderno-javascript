// Arrow Function - são funções anônimas
const soma = (a, b) => a + b
console.log(soma(1, 2))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parameters Default
function log(texto = 'Node') {
  console.log(texto)
}
log()
log('Sou mais forte')

// Operador rest
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}
console.log(total(1, 2))
