// Camada de serviço:
import retornaDiaSemana from "./diaSemana.js";

let serie = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

function retornaSerieDia(){
    let diaSemana = retornaDiaSemana();
    let serieDoDia = serie[diaSemana];
    return serieDoDia;
}

export default retornaSerieDia;