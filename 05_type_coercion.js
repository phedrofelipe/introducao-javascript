// Este documento tem como objetivo estudar os conceitos de COERÇÃO DE TIPOS


//  COERÇÃO DE TIPOS - Explícita (Manual)

// Criação de uma constante number, para demonstrar que o tipo da constante é Número:
const number = 28;
console.log(number, typeof number);

// Criação de uma constante numberString, a qual converte o tipo da constante de Número para String. OBS: O JS é case-sensitive, sendo assim o nome String deve ser declarado com a primeira letra maiúscula:
const numberString = String(number); 
console.log(numberString, typeof numberString);

// Criação de constantes para a conversão de números. OBS: O JS não reconhece vírgula, sendo necessário utilizar ponto para a declaração de número float:
console.log(Number('28'));
console.log(parseFloat('28.80'));
console.log(parseInt('19.99'));

// Criação de constantes para a conversão de números em boolean. OBS: Se o Número for 0 -> O resultado será 'false'. Se o Número for diferente de 0 -> O resultado será 'true';
console.log(Boolean(0));
console.log(Boolean(12));
console.log(Boolean(-1));    

console.clear()


//  COERÇÃO DE TIPOS - Implícita - (Automática)

console.log(10 + '1'); // Caso o tipo dos valores sejam distintos (EX: número + texto), o JS irá concatenar os valores convertendo os dois em um só tipo.

// Nas declarações abaixo, o JS converteu os valores em números de acordo com o seu operador aritmético:
console.log('10' - 1);
console.log('20' * 2);
console.log(100 / '2');
console.log(5 ** '3');
console.log(8 % 3);

// Na declaração abaixo, o JS não conseguiu identificar um número. Declarando o resultado como 'NaN' - Not a Number:
console.log(10 - 'abcdefg');

console.clear();


// EXEMPLOS EM EXTENSO:

let n = 10 + '1';
n = n - 1;

console.log(n);

// Qual será a saída do código abaixo?
console.log(10 + 2 + 5 + '5');

// Qual será a saída do código abaixo?
console.log('10' + 2 + 5 + 5);

// Qual será a saída do código abaixo?
console.log('10' - '2' - '5' - 2 + '5');