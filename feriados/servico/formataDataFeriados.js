// Subcamada II:

// Essas duas funções fazem parte da subcamada responsável por formatar os feriados.

// A primeira função, formataDiaSemana retorna o dia da semana em que o feriado cairá, através do uso do método "getDay()".
function formataDiaSemana(dataFeriado){
    let diasDaSemana  = ['Domingo', 'Segunda', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    // Como o "getDay()" retorna um número de 0 a 6 usamos esse número como índice do array diasDaSemana para obter o nome do dia.
    return diasDaSemana[dataFeriado.getDay()];
}

// A segunda função é a formataDataFeriado. Seu objetivo é formatar a data que está no formato Date do JS para o formato brasileiro (dia/ mês/ ano).
function formataDataFeriado(dataFeriado){

    // Isso é feito utilizando as funções nativas de data para retornar o dia, mês e ano e organizá-los em uma string no formato desejado.
    const diaFeriado =  dataFeriado.getDate();
    const mesFeriado = dataFeriado.getMonth();
    const anoFeriado = dataFeriado.getFullYear();

    const dataExibicao = diaFeriado + '/' + mesFeriado + '/' + anoFeriado;

    return dataExibicao;
}

export {formataDiaSemana, formataDataFeriado};