let person = {
  name: "joao",
  age: 30,
  weight: 100,
};

for (let property in person) {
  console.log(property);
  console.log(person[property]); 
  // varias forma de acessa a propriedade console.log(person.name) console.log(person["name"])

}
