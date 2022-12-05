// Este documento tem como objetivo estudar os conceitos de ESTRUTURA DE DADOS - ARRAYS PARTE 01


/* Como criar um ARRAY:
   O ARRAY é definido por meio dos colchetes ('[]');
   O ARRAY comporta diferentes tipos de dados em uma mesma variável e/ou constante.
*/

let arr = ['Pedro Felipe', 19, 1.75, true];

console.log(arr, typeof arr);


/* Como acessar os elementos de forma isolada no ARRAY:
   Para acessar os elementos do ARRAY de forma isolada é necessário especificar o índice de refência do elemento;
   OBS: Na computação a contagem dos índices começa por 0.
*/

console.log('Primeiro Elemento =', arr[0]); 
console.log('Segundo Elemento =', arr[1]);
console.log('Terceiro Elemento =', arr[2]);
console.log('Quarto Elemento =', arr[3]);


/* Como obter o tamanho do ARRAY: 
   Para descobrir o tamanho/Quantidade de elementos do ARRAY usa-se o atributo length (comprimento em inglês).
*/

console.log('Quantidade de Elementos =', arr.length);

console.clear();

/* Como percorrer o ARRAY:
   Imprimir cada elemento e/ou Índice de um ARRAY.
*/

for (let i = 0; i < arr.length; i++) { // Percurso pelos elementos do ARRAY utilizando o Loop for. O "arr.length" especifica a quantidade de elementos, sem precisar definir um número manualmente. Caso o ARRAY recebe mais algum valor, o arr.length irá atualizar as informações automaticamente.
    console.log(arr[i]);
}

console.clear();

for (let element of arr) { // o for...of (externo) percorre todos o elementos de uma variável. Sua estrutura funciona da seguinte forma: for (let variavelDePercurso of variavelPercorrida).
    console.log(element);
}

console.clear();

for (let index in arr) { // for...in (interno) percorre todos índices de dentro de uma variável. Sua estrutura funciona da seguinte forma: for (let variavelDePercurso in variavelPercorrida).
    console.log(index, arr[index]);
}