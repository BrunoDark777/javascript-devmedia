var aluno_academia = {
    id: 10,
    nome: "Gerson Gayzola",
    altura: 1.75,
    peso: 69
}

var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

var imc_aluno = (peso_aluno / (altura_aluno * altura_aluno)).toFixed(2);

console.log("O IMC do aluno é de: "+imc_aluno);

if(imc_aluno < 18.5){

    console.log("O aluno "+nome_aluno+" está abaixo do peso");

} else if(imc_aluno >= 18.5 && imc_aluno <= 24.99){

    console.log("O aluno "+nome_aluno+" está com o peso normal");

} else{

    console.log("O aluno "+nome_aluno+" ta gordo baleia");

}