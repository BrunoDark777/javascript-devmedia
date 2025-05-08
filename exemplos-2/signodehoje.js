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

const retorna_signo = (signos) => {

    let data = new Date("2020-02-07 00:00:00");

    let ano = data.getFullYear();

    let data_inicio_signo = new Date(ano + "-" + signos[0]["DataInicio"] + "00:00:00");
    let data_fim_signo = new Date(ano + "-" + signos[0]["dataFim"] + "23:59:59");

    if(data >= data_inicio_signo && data <= data_fim_signo){
        return signos[0]["Nome"];
    }
}

const nome_signo = retorna_signo(signos);

console.log("O signo do dia é: " + nome_signo);