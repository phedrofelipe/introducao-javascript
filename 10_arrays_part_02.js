// Este documento tem como objetivo estudar os conceitos de ESTRUTURA DE DADOS - ARRAYS PARTE 02 (MÉTODOS DE ARRAYS)

// Para declarar métodos em uma ARRAY utiliza-se os parênteses / Para declarar uma FUNÇÃO no js utiliza-se os perênteses.

let arr01 = [30, 12, 45, 34, 29];
let arr02 = [];


/* Fatiamento: slice
   O fatiamento consiste em imprimir os elementos especificos de acordo com uma ordem pré-definida.
*/
console.log(arr01.slice(0, 2)); // Estrutura: (variavel.slice(indiceInicial, indiceFinal)) -> OBS: O índice final é exclusivo, ou seja será imprimido os valores ANTES desse índice.
console.log(arr01.slice(2));    // Quando não é definido o Índice final, o atributo irá imprimir os valores A PARTIR do índice incial.

console.clear();


/* Adição de Elementos: push | unshift
   Adição de elementos de acordo com os índices finais ou iniciais.
*/

// push
console.log('Antes de adicionar com push =', arr02);

arr02.push(10, 15, 20); // O método push aceita a adição de mais de um elemento.
arr02.push(25);         // O método push sempre irá adicionar os elementos como índice final.

console.log('Depois de adicionar com push =', arr02);

// unshift
console.log('Antes de adicionar com unshift =', arr02);

arr02.unshift(0);       // O método unshift sempre irá adicionar os elementos como índice inicial.

console.log('Depois de adicionar com unshift =', arr02);

console.clear();


/* Remoção de Elementos: pop | shift
   Remoção de elementos de acordo com os índices finais ou iniciais.
*/

// pop
console.log('Antes de remover com o pop =', arr02);

const elementRemoved = arr02.pop(); // O método pop remove o elemento do último índice por padrão.

console.log('Depois de remover com o pop =', arr02);
console.log('O elemento removido foi =', elementRemoved);   // O pop sempre retorna o elemento removido.


// shift
console.log('Antes de remover com o shift =', arr02);

const elementRemoved02 = arr02.shift(); // O método shift remove o elemento do primeiro índice por padrão.

console.log('Depois de remover com o sift =', arr02);
console.log('O elemento removido foi =', elementRemoved02); // O shift sempre retorna o elemento removido.

console.clear();


/* Concatenação de ARRAYS: concat
   Junção dos valores/elementos de distintas variáveis.
*/

console.log('arr01 =', arr01);
console.log('arr02 =', arr02);

console.log('Arrays concatenados =', arr01.concat(arr02));  // Neste método de concatenação, os elementos dos índices inciais serão da variável 'arr01'.
console.log('Arrays concatenados =', arr02.concat(arr01));  // Neste método de concatenação, os elementos dos índices inciais seráo da variável 'arr02'.

console.clear();


/* Busca de Elementos: indexOf | lastIndexOf
   Busca de elementos de acordo com a ordem do índice (incial ou final).
*/

console.log(arr01);

let indexOfElement = arr01.indexOf(34);     // Busca do elemento 34, o resultado será o índice onde o elemento está alocado.
console.log(indexOfElement);

let indexOfElement1 = arr01.indexOf(40);    // Toda vez que é feita a busca de um elemento inexistente, por padrão o resultado será ('-1').
console.log(indexOfElement1);


let arr03 = [1, 2, 3, 3, 4, 3];     // ARRAY criado com vários elementos iguais alocados em índices diferentes.

console.log(arr03.indexOf(3));      // A busca utilizando o método indexOf terá como resultado a localização do elemento pela ordem inicial do índice (do início ao fim).

console.log(arr03.lastIndexOf(3));  // A busca utilizando o método lastIndexOf terá como resultado a localização do elemento pela ordem final do índice (do fim ao início).

console.clear();


/* Descobrindo a Existência de um elemento: includes
   Verifica existência do elemento e declara a verificação como true ou false.
*/

console.log(arr01);

console.log(arr01.includes(10));    // O elemento não existe -> Resultado: false.
console.log(arr01.includes(12));    // O elemento existe -> Resultado: true.

console.clear();


/* Inversão de ARRAYS: reverse
   O método inverte a ordem do ARRAY (os elementos finais são realocados para o ínicio seguindo uma nova ordem).
*/

console.log('arr01 normal =', arr01);

const arr01Reverse = arr01.reverse();

console.log('arr01 invertido =', arr01Reverse);