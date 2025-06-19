function Person(nome) {
  this.nome = nome;
}
Person.prototype.walk = function () {
  return this.nome + " está andando";
};
