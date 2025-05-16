let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20", "dataFim": "02-08"},
    {"Nome": "Peixes", "DataInicio": "02-19", "dataFim": "03-20"},
    {"Nome": "Áries", "DataInicio": "03-21", "dataFim": "04-19"},
    {"Nome": "Touro", "DataInicio": "04-20", "dataFim": "05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21", "dataFim": "06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22", "dataFim": "07-23"},
    {"Nome": "Leão", "DataInicio": "07-24", "dataFim": "08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23", "dataFim": "09-22"},
    {"Nome": "Libra", "DataInicio": "09-23", "dataFim": "10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23", "dataFim": "11-21"},
    {"Nome": "Sargitário", "DataInicio": "11-22", "dataFim": "12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22", "dataFim": "01-19"}
];

const retorna_signo = (signos, data) => {

    let ano = data.getFullYear();

    for(const signo of signos){

        let data_inicio_signo = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
    let data_fim_signo = new Date(ano + "-" + signo["dataFim"] + " 23:59:59");
    
    let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

    if(tipo_comparacao == "and"){

        if(data >= data_inicio_signo && data <= data_fim_signo){
            return signo["Nome"];
        }
    } else if(tipo_comparacao == "or"){

        if(data >= data_inicio_signo || data <= data_fim_signo){
            return signo["Nome"];
        }
    }

    }
    
}

let data_app = new Date("2020-05-08 00:00:00");

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo do dia é: " + nome_signo);