// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(1, 2);
imprimirSoma(1);
imprimirSoma(1, 2, 3, 4);
imprimirSoma();

// Função com retorno
function soma(a, b = 1) {
  return a + b;
}
console.log(soma(1, 2));
console.log(soma(1));
console.log(soma());
