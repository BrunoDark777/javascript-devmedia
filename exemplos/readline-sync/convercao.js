import entradaDados from 'readline-sync';

console.log("Conversor de milhas para quilômetros:\n");

let milha = entradaDados.question("Informe o valor em Milhas: ");

let quilometros = (milha * 1.60934).toFixed(2);

console.log(milha+"Mi equivale a "+quilometros+"Km")
