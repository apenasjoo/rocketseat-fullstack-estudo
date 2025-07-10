// Manipulando arrays

let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("nodejs");
// adicinar no começo
techs.unshift("sql");
// remover do fim
techs.pop();
// techs.pop() se continuar usando ele vai fica removendo sempre o ultimo elemento do array.
// remover do começo
techs.shift();

// pegar somente alguns elementos do array
console.log(techs.slice(1, 2));
// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2);
// encontrar a posição de um elemento no array e remover
let index = techs.indexOf("css");
techs.splice(index, 1)



console.log(techs);


