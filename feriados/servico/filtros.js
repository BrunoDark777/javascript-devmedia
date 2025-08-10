// Subcamada:

// Esse arquivo é a subcamada responsável por filtrar os feriados.

function filtraFeriados(feriados, numeroFeriados){
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let proximosFeriados = [];
    let novaDataFeriado;

    // A filtragem dos feriados começa "percorrendo" o array de feriados e adicionando o ano às datas correspondentes.
    feriados.forEach(feriado => {

        // Fazemos isso adicionando o ano atual nas datas de feriados e comparando-as com a data atual.
        novaDataFeriado = new Date(feriado.data + '/' + anoAtual);

        // Se a data do feriado ja tiver passado colocamos ela para o próximo ano.
        if(dataAtual >= novaDataFeriado){
             novaDataFeriado.setFullYear(anoAtual +1);
        }

        // Com as datas definidas criamos um novo array com o mesmo conteúdo, mas desta vez com a data completa e no formato Date do JavaScript.
        proximosFeriados.push({
            nome: feriado.nome,
            data: novaDataFeriado
        });
    });

    // Por fim, usamos o método nativo "sort" para ordenar o array por data e depois o método "slice" para retornar o número desejado de feriados.
    proximosFeriados = proximosFeriados.sort((a, b) => a.data - b.data);
    proximosFeriados = proximosFeriados.slice(0, numeroFeriados);

    // O código deve retornar apenas os três próximos feriados.
    return proximosFeriados;
}

export default filtraFeriados;