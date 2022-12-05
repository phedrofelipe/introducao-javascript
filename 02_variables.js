// Este documento tem como objetivo estudar os conceitos de VARIÁVEIS

let age = 19;

console.log(age);


// Tipos de Variáveis no JS:

let name = "Pedro Felipe"; // string (text)
let birthDate = 2003;      // number (OBS: No JS a variável number já abrange todos os conjuntos numéricos)
let height = 1.75;         // number (float)
let studying = true;       // boolean (true or false) 

console.log(name, typeof name);
console.log(birthDate, typeof birthDate);
console.log(height, typeof height);
console.log(studying, typeof studying);


// Variáveis Indefinidas e Nulas:

let other = undefined;    // Indefinidade com pré-conteúdo
let another;              // Indefinida sem pré-conteúdo
let anything = null;      // Nula

console.log(other);
console.log(another);
console.log(anything);