// Camada de Exibição:

import retornaProximosFeriados from "./servico/retornaFeriados.js";
import imprimeFeriados from "./exibicao/imprimeFeriados.js";

console.log('\nOs próximos feriados serão: \n');

let numeroFeriados = 3;

// O array formatado pela camada de serviço é consumido pela camada de exibição através da função retornaProximosFeriados.
let proximosFeriados = retornaProximosFeriados(numeroFeriados);

// E por fim, os próximos feriados são exibidos para o usuário através da função imprimeFeriados.
imprimeFeriados(proximosFeriados);