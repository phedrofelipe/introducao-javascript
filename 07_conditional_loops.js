// Este documento tem como objetivo estudar os conceitos de ESTRUTURAS DE REPETIÇÃO - LAÇOS CONDICIONAIS (Estrutura de repetição não controlada)

const input = require('readline-sync'); // Declaração para a importação da Biblioteca 'readline-sync' instalado no diretório do documento.


// Sistema de Sorteio de Número - O sistema terá um número pré-definido, posteriormente o usuário escolherá um número. Se o número escolhido pelo usuário for diferente do número desejado, o processo se repetirá, se não o processo será finalizado.

const randomNumber = 5; // Número Sorteado/Aleatório.

let number = Number(input.question('Escolha um Numero: ')); // A declaração chama a constante input (referente a biblioteca instalada) e declara a função 'question' (que faz parte da biblioteca) a qual irá ler o valor digitado pelo usuário. OBS: Por padrão, a função lerá o valor como string/texto, por esse motivo é necessário fazer a conversão do tipo de constante para number/número.

while (number !== randomNumber) {
    console.log('Número errado! Tente novamente.');

    number = Number(input.question('Escolha um Numero: '));

}   console.log('Parabéns! Você acertou.'); // A partir do momento que o laço condicional é finalizado, o restante do código será executado normalmente.



/* O exemplo abaixo demonstra uma forma de executar a função do código utilizando as estruturas condicionais:

if (randomNumber === number) {
    console.log('Parabéns! Você acertou o número sorteado.');
} else {
    console.log('Número errado! tente novamente.');
}

*/