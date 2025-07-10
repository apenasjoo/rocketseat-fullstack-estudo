/*
let name = "maria";
let names = ["João", "paulo", "pedro"];

for (let name of names) {
  console.log(name);
}
*/

const frutas = ["limao", "maça", "uva", "abacate", "banana"];
const doces = ["maça", "uva", "banana"];

for (const fruta of frutas) {
  if (doces.includes(fruta)) {
    console.log(`a fruta ${fruta} é doce`);
  }
}
