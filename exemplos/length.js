var notas_bimestre = [
    7, 6, 8, 5          // O índice para acessar o primeiro elemento de um array deve ser sempre 0 (zero).
];

var tatal_notas = notas_bimestre.length; // Agora estamos obtendo o tamanho do array notas_bimestre, que contém 4 notas.

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / tatal_notas;

console.log("Média do aluno: "+media_aluno); // Média do aluno: 6.5

// O resultado é o mesmo, mas agora não estamos definindo o total de itens de forma manual.