function Person(nome) {
  this.nome = nome;
  this.walk = function () {
    return this.nome + " está andando";
  };
}
const joao = new Person("Joao");
const maria = new Person("Maria");
console.log(joao.walk());
