/*function SayMyName(name) {
  console.log(name);
}
SayMyName({ name: "Diego", age: 23, job: "programador" });  */

function SayMyName(name) {
  name();
}

SayMyName(() => {
  console.log("Joao");
});
