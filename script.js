const firstNumber = +prompt("Digite o primeiro número:");
const secondNumber = +prompt("Digite o segundo número:");

const parOuImpar = (firstNumber + secondNumber)% 2 == 0 ? "par" : "impar";
const numerosIguais = firstNumber === secondNumber ? "iguais" : "diferentes";

alert(`A soma dos dois números é ${firstNumber + secondNumber}`);
alert(`A subtração dos dois números é ${firstNumber - secondNumber}`);
alert(`A multiplicação dos dois números é ${firstNumber * secondNumber}`);
alert(`A divisão dos dois números é ${firstNumber / secondNumber}`);
alert(`O resto da divisão dos dois números é ${firstNumber % secondNumber}`);
alert(`O resultado da soma dos dois números é ${parOuImpar}`);
alert(`Os números inseridos são ${numerosIguais}`);



