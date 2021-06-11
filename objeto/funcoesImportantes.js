const pessoa = {
  nome: 'Ana',
  idade: 20,
  peso: 57
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 4 }
const obj = Object.assign(dest, obj1, obj2)
console.log(obj)

Object.freeze(obj)
obj.c = 12345
console.log(obj)
