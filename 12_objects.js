// Este documento tem como objetivo estudar os conceitos de ESTRUTURA DE DADOS - OBJETOS


/* Como definir um Objeto:
   Estrutura:
let variavelDeclarada = {
    chaveDoElemento: valorDoElemento,
    'chaveDoElementoComplexo': valorDoElemento,
}
   OBS01: Para a definição de objetos utiliza-se chaves {};
   OBS02: Os objetos definem uma chave para cade elemento dentro da variável/constante.
*/

let user = {
    'name-user': 'Pedro Felipe',    // Para criar uma chave em complexo (Utilizando traços), é necessário definir entre aspas.
    age: 19,
}

console.log(user);
console.log(user['name-user']);     // Imprimindo o elemento de chave complexa.
console.log(user.age);              // Imprimindo o elemento de chave simples.


// Como adicionar um elemento no Objeto:

user.height = 1.75; // A declaração atribui um valor a uma chave de um elemento que não existe, assim criando a chave automaticamente.

console.log(user);


// Como remover uma chave de um Objeto:

delete user.height; // O atributo delete exclui a chave respectiva variável declarada.

console.log(user);

console.clear();

// Como percorrer um Objeto:

for (let key in user) { // o Método for...in percorre as chaves internas do objeto.
    console.log(key);
}