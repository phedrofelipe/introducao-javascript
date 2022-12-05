// Este documento tem como objetivo estudar os conceitos de ESTRUTURAS DE REPETIÇÃO - LAÇOS NUMÉRICOS (Estrutura de repetição controlada)

const input = require('readline-sync');


/* O problema:
   Nas declarações abaixo, há uma repetição para declarar as constantes com o valor das notas.
*/

// const note01 = Number(input.question('Informe a sua nota 01: '));
// const note02 = Number(input.question('Informe a sua nota 02: '));
// const note03 = Number(input.question('Informe a sua nota 03: '));

// let media = (note01 + note02 + note03) / 3;

// console.log('Sua média é =', media);


/* Acumulador:
   O acumulador é uma variável que dentro do próprio código terá uma soma do próprio valor, acumulando o seu resultado acerca de operações realizadas com o seu valor anterior.
*/

let accumulator = 10;
accumulator = accumulator + 1;  // Atribui um valor ao acumulador declarando a váriavel de forma interna;               R=11
accumulator += 1;               // Atribui um valor ao acumulador utilizando o operador '+';                            R=12
accumulator ++;                 // Atribui a soma de uma unidade ('1') no valor final do acumulador;                    R=13
accumulator -= 3;               // Subtrai um valor ao acumulador definindo o resultado como o valor final da variável; R=10

console.log(accumulator);

console.clear();


/* Estrutura FOR:
   Estrutura de repetição controlada, definindo exatamente o número de repetições.
*/

for (let i = 0; i <= 4; i++) {
    console.log('Repetição', i);
} // ESTRUTURA: for (definição da váriavel = atribuição do valor ; condição de parada; condição de continuidade).

for (let i = 10; i >= 5; i--) {
    console.log('Repetição', i);
}

console.clear();


/* Resolvendo problema inicial:
   Criação de uma função que receba o valor das 3 notas utilizando o FOR, o valor será atribuído à variável $note e a mesma será somada à variável $sum. Por fim será feita a média divindo o resultado da variável $sum (Soma das 3 notas) por 3. 
*/

let note;
let sum = 0;

for (let i = 1; i <= 3; i++) {
    note = Number(input.question(`Informe sua nota ${i}: `)); // Concatenação no JS -> Utiliza-se a crase (``) para permitir a leitura de variáveis na declaração. Para declarar a variável utiliza-se os símbolos de cifrão ($) + a declaração da variável entre chaves {variável}. EX: `Isso é um exemplo de concatenação utilizando uma ${variavel}`.

    sum = sum + note;
}   console.log(`Sua média é = ${sum / 3}.`);