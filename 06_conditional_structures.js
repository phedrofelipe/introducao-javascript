// Este documento tem como objetivo estudar os conceitos de ESTRUTURAS CONDICIONAIS

const age = 19;

if (age >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

console.clear();


// Sistema de Notas dos Alunos (Aprovado, Recuperação ou Reprovado):

var nota01 = 10;
var nota02 = 9;
var nota03 = 0;
var nota04 = 0;

var media = (nota01 + nota02 + nota03 + nota04) / 4;

if (media >= 7) {
    console.log(media, '= Aprovado!');
} else if (media >= 5) {
    console.log(media, '= Recuperação!');
} else {
    console.log(media, '= Reprovado!');
}