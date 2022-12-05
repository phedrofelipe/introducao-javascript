// Este documento tem como objetivo estudar os conceitos de OPERADORES ARITMÉTICOS

let firstNumber = 20;
let secondNumber = 5;

/*
Adição              +
Subtração           -
Multiplicação       *
Divisão             /
Exponenciação       **
Resto da Divisão    %
*/


// Criação das Constantes referente aos cálculos aritméticos:

const addition = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;
const exponentiation = firstNumber ** secondNumber;
const restOfDivision = firstNumber % secondNumber;


// Declaração das Constantes referentes aos cálculos aritméticos:

console.log('Adição =', addition);
console.log('Subtração =', subtraction);
console.log('Multiplicação =', multiplication);
console.log('Divisão =', division);
console.log('Exponênciação =', exponentiation);
console.log('Resto da Divisão =', restOfDivision);


// Precedência de Operadores:

console.log('Média =', (10 + 8 + 7 + 6.5) / 4);


// Biblioteca Math:

console.log('Número de PI =', Math.PI);                                     // Declaração do Número PI
console.log('Raiz Quadrada de 25 =', Math.sqrt(25));                        // Declaração de Raiz Quadrada
console.log('Valor Máximo =', Math.max(firstNumber, secondNumber));         // Número Máximo selecionado
console.log('Valor Mínimo =', Math.min(firstNumber, secondNumber));         // Número Mínimo selecionado