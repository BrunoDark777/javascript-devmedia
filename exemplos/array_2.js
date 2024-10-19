var funcionarios = [
    "Bárbara",
    "Carlos",
    "Helena",
    "Maria",
    "Rogério"
];

var novos_funcionarios = [
    "Guilherme",
    "Jessica"
];

funcionarios[0] = novos_funcionarios[1]; // Alterando valores do array funcionarios.
funcionarios[4] = novos_funcionarios[0];

console.log(funcionarios)