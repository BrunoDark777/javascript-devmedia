import entradaDados from 'readline-sync';

console.log("Aplicação de Juros: \n");

let valorDivida = entradaDados.question("Informe o valor devido: ");

let diasDevidos = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
 
if(valorDivida == 0){

    console.log("O valor da dívida deve ser maior que zero!")
}
else if(diasDevidos == 0){

    console.log("Você esta em dia!")

}
else if(diasDevidos <= 15){

    let juros = (valorDivida / 100) * 5

    let valorTotal = Number(juros) + Number(valorDivida)

    console.log("\nSua dívida inicial era R$"+valorDivida);
    console.log("Seu atraso é de "+diasDevidos+" Dias");
    console.log("Sua taxa de Juros é de R$"+juros);
    console.log("Sua dívida total é de R$"+valorTotal);
}
else if(diasDevidos > 15){

    let juros = (valorDivida / 100) * 10

    let valorTotal = Number(juros) + Number(valorDivida)

    
    console.log("\nSua dívida inicial era R$"+valorDivida);
    console.log("Seu atraso é de "+diasDevidos+" Dias");
    console.log("Sua taxa de Juros é de R$"+juros);
    console.log("Sua divida total é de R$"+valorTotal)
}
else{
    console.log("Você não informou um valor válido!")
}