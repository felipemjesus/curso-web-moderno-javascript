// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de Função

// usar spread com objeto
const funcionario = { nome: 'Ana', salario: 5500.50 }
const clone = { ativo: true, ...funcionario }

// usar spread com array
const grupoA = ['João', 'Ana', 'Bia']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
