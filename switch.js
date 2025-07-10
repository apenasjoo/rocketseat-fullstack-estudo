switch (expression) {
  case "a":
    //codigo A
    break;
  case "b":
    //codigo B
    break;
  default:
    break;
}

//------------------//

function calculadora(number1, operador, number2) {
  let resultado = 0;

  switch (operador) {
    case "+":
      resultado = number1 + number2;
      break;
    case "-":
      resultado = number1 - number2;
      break;
    case "*":
      resultado = number1 * number2;
      break;
    case "/":
      resultado = number1 / number2;
      break;
    default:
      console.log("Não Implementado");
      break;
  }
}
