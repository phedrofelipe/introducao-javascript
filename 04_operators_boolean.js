// Este documento tem como objetivo estudar os conceitos de OPERADORES BOOLEANOS

/*
    Igualdade:          ==  (ou ===)
    Desigualdade:       !=  (ou !==)
    Maior que:          >
    Maior ou igual:     >=
    Menor que:          <
    Menor ou igual:     <=
*/


const number = 10;

console.log(number == 10);
console.log(number > 20);

console.log(10 == '10');    // Compara somente o conteúdo do valor
console.log(10 === '10');   // Compara o conteúdo e o tipo do valor


console.clear();            // Limpa todo o conteúdo que foi emitido anteriormente


console.log(10 != 10);
console.log(10 != '10');    // Compara somente o conteúdo do valor
console.log(10 !== '10');   // Compara o conteúdo e o tipo do valor



// CONJUNÇÕES LÓGICAS


// AND -> && (Cria uma regra de exigência de duas condições ou mais)

let age = 19;
let cnh = true;

const driver = age >= 18 && cnh === true;

console.log('Posso Dirigir?', driver);


// OR -> || (Faz um comparitivo entre duas condições ou mais)

age = 20;

const voteFacul = age < 18 || age >= 60;

console.log('Meu voto é Faultativo?', voteFacul);


// NOT -> ! (Inverte o resultado da consulta)

const feedback = false;

console.log('Meu Feedback é:', !feedback);