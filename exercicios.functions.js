function Person(nome) {
  this.nome = nome;
}
Person.prototype.walk = function () {
  return this.nome + " está andando";
};

// Função de saudação personalizada

function saudar(nome) {
  return `ola ${nome} tudo bem? `;
}
console.log(saudar("João"));

// Função para somar dois números

function somar(a, b) {
  return a + b;
}
console.log(somar(3, 10));

//Função para verificar se um número é par

function ehPar(numero) {
  return numero % 2 === 0;
}

console.log(ehPar(10));
console.log(ehPar(5));

//Função que calcula a média de 3 notas

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

console.log(calcularMedia(10, 20, 30));

// Função que retorna o maior número entre dois

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maiorNumero(10, 20));
