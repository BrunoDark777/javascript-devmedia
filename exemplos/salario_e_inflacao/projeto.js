 import entradaDados from 'readline-sync';
 
 let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00},
    {ano: 2021, salario: 1100.00},
    {ano: 2022, salario: 1212.00},
    {ano: 2023, salario: 1320.00},
    {ano: 2024, salario: 1412.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52},
    {ano: 2021, ipca: 4.65},
    {ano: 2022, ipca: 5.79},
    {ano: 2023, ipca: 4.62},
    {ano: 2024, ipca: 4.71}
];

console.log("Escolha uma das alternativas:\n");

console.log(`1 - Listar os salários minímos de 2010 à 2024
2 - Listar o índice IPCA de 2010 à 2024
3 - Comparação entre o percentual de aumento salarial e o IPCA\n`);

let numero = entradaDados.question('digite o numero da sua escolha: ');

switch(numero){
    case '1':

            let sl = salarioMinimo.length;

            for (let i = 0; i < sl; i++){

                let data = salarioMinimo[i].ano;
                let sal = salarioMinimo[i].salario;

                let ano = "Ano: ";
                let salario = "Salário mínimo: "

                console.log("\n"+ ano.padEnd(25, '.') + " " + data);
                console.log(salario.padEnd(25, '.') + " R$" + sal.toFixed(2).replace(".",","));
            };
     break

     case '2':

             let infla = inflacao.length;

             for (let i = 0; i < infla; i++){

                let anoIF = inflacao[i].ano;
                let ipca = inflacao[i].ipca;

                let anoST = "Ano: ";
                let ipcaST = "Inflação: ";

                console.log("\n"+ anoST.padEnd(25, '.') + " " + anoIF);
                console.log(ipcaST.padEnd(25, '.') + " " + ipca +"%");
             };
     break

     case '3':

     console.log("\nOpção escolhida: 3\n");
     break
     
     default:

     console.log("\nOpção inválida!\n");
     break
};