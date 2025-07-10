const animals = [
  "lion", // elemento simples (string)
  "monkey", // elemento simples (string)
  {
    // elemento objeto
    name: "cat",
    age: 3,
  },
  { name: " Burro ", age: 5 },
];

// Acessando propriedade de um objeto dentro do array
// console.log(animals[2].name); // Mostra: "cat"
console.log(animals[3].age + animals[3].name); // Mostra: 5
