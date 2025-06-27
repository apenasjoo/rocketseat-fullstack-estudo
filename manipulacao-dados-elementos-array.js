// Manipulçao de Elementos no arrays e Dados

//Metodo de contar Elementos do array .length

console.log(
  [
    "a",
    { type: "array" },
    function () {
      return "Alo Mundo";
    },
  ][2]() // o elemtento no array e esta rodando a Função dentro do array usando "()"
);

// Jeito de normal de array usando ".lenght"

console.log(["a", "b", "c"].length);
