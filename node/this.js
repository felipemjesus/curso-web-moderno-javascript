// this no Node aponta para o module exports
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// this no Node dentro da função aponta para global
function logThis() { 
  console.log('Dentro de uma função')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)
}
logThis()
