/*function SayMyName(name) {
  console.log(name);
}
SayMyName({ name: "Diego", age: 23, job: "programador" });  */

/* function SayMyName(name) {
  name();
}

SayMyName(() => {
  console.log("Joao");
}); */
/*
function SayMyName(name) {
  console.log("Antes de executar a função callback");
  name();
  console.log("Depois de executar a função callback");
}
SayMyName(() => {
  console.log("estou em um callback");
});

*/
function saque(funcao_de_debitar) {
  console.log("Acessei minha conta");
  funcao_de_debitar();
  console.log("Sai da minha conta");
}

function debitar_do_cartao() {
  console.log("Saquei do cartao");
}

function debitar_do_pix() {
  console.log("Saquei do pix");
}

let saldo_do_cliente = 10;

if (saldo_do_cliente < 100 && saldo_do_cliente > 0) {
  saque(debitar_do_cartao);
}

if (saldo_do_cliente >= 100) {
  saque(debitar_do_pix);
}

if (saldo_do_cliente == 0) {
  console.log("POBREEEEEEE!!!");
}
