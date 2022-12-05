// Este documento tem como objetivo estudar o conceito de FUNÇÕES


/* Definição de uma Função: 
   Estrutura: function nomeDaFuncao() { 
   Ação que a função executará 
}
   OBS01: A ideia de um função é ser genérica, para uso contínuo.
   OBS02: Não é considerado uma boa prática utilizar console.log dentro de uma função, pois a mesma fica fixa em declarar resultados e não em executar ações sobrepostas.
*/

function initialLogin() {
    console.log('Seja bem-vindo(a)!'); // Para a definição de uma função SEMPRE utiliza-se os parênteses!
}

initialLogin()

console.clear();


// Enviando parâmetros para a Função:

function salutation(name, access='user') { // Declaração de um parâmetro dentro de uma função, o valor desse parâmetro será preenchido no momento que a função for chamada. / Definição de um parâmetro default (padrão/predefinido em inglês).
    // console.log(name);
    // console.log(access);
    console.log(`Bem vindo ${name}! Seu acesso é ${access}.`);
}

salutation('Pedro Felipe')

console.clear();


// Retorno de Função:

function sum(number01, number02) {

    // console.log('Resultado da soma =', number01 + number02);

    return number01 + number02; // A declaração return efetiva a soma das variáveis number01 e number02 e retorna o valor. / O return finaliza a função!
}

const sumResult = sum(10, 30);  // Para que o resultado da declaração return seja imprimida, é necessário criar uma variável/constante que receba os valores retornados.

console.log('Resultado da soma =', sumResult);         // Exibição da constante 'sumResult' que exibe o retorno da função soma.

console.clear()


function comparation(number=51) {  // Dependendo da estrutura do código, o retorno pode acontecer mais de uma vez.
    if (number >= 50) {
        return true;
    } 
    
    return false;
}

const comparationResult = comparation();
console.log(comparationResult);