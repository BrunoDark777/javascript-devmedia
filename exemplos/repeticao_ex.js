let cursos_idiomas = [
    {nome: "inglês", preco: 2500, carga_horaria: 160},
    {nome: "espanhol", preco: 1550, carga_horaria: 110},
    {nome: "frances", preco: 3600, carga_horaria: 200},
    {nome: "chinês", preco: 5500, carga_horaria: 400},
    {nome: "alemão", preco: 3800, carga_horaria: 230}
];

for(let curso of cursos_idiomas){

    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;

    let preco_hora_curso = preco_curso / carga_horaria_curso;

    console.log("Nome do curso: "+nome_curso);
    console.log("Carga horária do curso: "+carga_horaria_curso+" horaas");
    console.log("Preço do curso: R$"+preco_curso+",00");

    if(preco_hora_curso >= 15){

        console.log("Horas/aula superior ou igual a R$15,00");

    } else{

        console.log("Hora/aula inferior a R$15,00");

    }

    console.log("\n");
}