let frota = [
  {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2022,
    cor: "Branco",
  },
  {
    marca: "Fiat",
    modelo: "Mobi",
    ano: 2023,
    cor: "Vermelho",
  },
  {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2024,
    cor: "Prata",
  },
  {
    marca: "Hyundai",
    modelo: "HB20",
    ano: 2023,
    cor: "Preto",
  },
];

// Para acessar o primeiro carro (objeto) do array
console.log(frota[0]);
/* Saída:
{
  marca: "Volkswagen",
  modelo: "Gol",
  ano: 2022,
  cor: "Branco"
}
*/

// Para acessar uma propriedade específica de um carro no array
console.log(frota[1].modelo); // Saída: "Mobi"
console.log(
  `O carro na terceira posição é um ${frota[2].marca} ${frota[2].modelo} do ano ${frota[2].ano}.`
);
// Saída: O carro na terceira posição é um Chevrolet Onix do ano 2024.

// Para ver o array de objetos inteiro no console
console.log(frota);
