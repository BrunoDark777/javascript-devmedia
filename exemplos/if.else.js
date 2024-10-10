// Difine a variavel com o dia da seamna (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica se o dia da semana é Sábado ou Domingo.
if(dia_semana == 0 || dia_semana == 6){
    //Imprime uma mensagem informando o horario de funcionamento.
    console.log("Funcionamos apenas de Segunda à Sexta");
} else{
    //Do contrário, informa que a loja está aberta.
    console.log("Loja aberta");
}