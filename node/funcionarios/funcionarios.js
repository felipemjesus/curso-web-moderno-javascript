const axios = require('axios')

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(response => {
  const funcionarios = response.data
  //console.log(funcionarios)
})

// Desafio - recuperar mulher chinesa que possui o menor salário

axios.get(url).then(response => {
  
  const funcionarios = response.data
  
  const getChineses = f => f.pais == 'China'
  const getMulheres = f => f.genero == 'F'
  const getMenorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario 
      ? funcionario 
      : funcionarioAtual
  }
  const mulher = funcionarios
    .filter(getChineses)
    .filter(getMulheres)
    .reduce(getMenorSalario)
  console.log(mulher)

})
