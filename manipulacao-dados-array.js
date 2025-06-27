// separa um texto que contem espaços, em um novo array onde
//cada texto é uma posição do array.
//Depois disso, transforme o array em um texto e onde era espaços, coloque _

let pharase = "Eu quero viver o Amor!";
let myArray = pharase.split(" ");
// o METODO split ele vai receber como Argumento oque quero separar nessa frase
console.log(myArray);

let pharaseWithUnderscore = myArray.join("_");
console.log(pharaseWithUnderscore.toLowerCase());
// essa METODO .join() em um array ele vai juntar o array, dentro vc bota oque vc quer passar para juntar
