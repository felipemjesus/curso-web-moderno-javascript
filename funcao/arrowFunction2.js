function Pessoa() {
  this.idade = 0

  setInterval(() => console.log(this.idade++), 1000)
}

new Pessoa
