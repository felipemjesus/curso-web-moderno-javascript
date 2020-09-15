// par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec() {
  const saudacao = 'Fala'; // contexto léxico 2
  return saudacao;
}

// objetos são grupos alinhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua 1 de Março',
    numero: 123
  }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
