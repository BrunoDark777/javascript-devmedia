// Camada de Serviço: 

import feriadosNacionais from "../dados/dataFeriados.js";
import filtraFeriados from "./filtros.js";
import { formataDiaSemana, formataDataFeriado } from "./formataDataFeriados.js";

// A camada de serviço é responsável por retornar os próximos feriados, sem se preocupar com o processo usado para isso.
function retornaProximosFeriados(numeroFeriados){

    let feriadosFiltro = filtraFeriados(feriadosNacionais, numeroFeriados);
    let feriadosFiltroFormatados = [];

    feriadosFiltro.forEach(feriado => {
        const dataFeriado = feriado.data;
        let diaSemana = formataDiaSemana(dataFeriado);
        const dataFeriadoFormatada = formataDataFeriado(dataFeriado);

        // Os dados formatados são adicionados em um novo array contendo o nome, o dia da semana ea data formatada.
        feriadosFiltroFormatados.push({
            nome: feriado.nome,
            diaSemana: diaSemana,
            data: dataFeriadoFormatada
        });
    });

    return feriadosFiltroFormatados;
}

export default retornaProximosFeriados;