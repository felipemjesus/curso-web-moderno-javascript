// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const nomes = ['Ana', 'Bia', 'Maria', 'Bia']
const nomesSet = new Set(nomes)
console.log(nomesSet)
