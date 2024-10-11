import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');
console.log("Olá, "+nome);

let idade = entradaDados.question('Digite sua idade: ');
console.log("Você tem "+idade+" anos de idade");