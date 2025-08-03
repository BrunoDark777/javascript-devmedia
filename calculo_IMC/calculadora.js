
//Contexto do cálculo de IMC.

// O contexto do cálculo de IMC é representado pela funçao calculaIMC, pois o único objetivo dela é esse.
function calculaIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

// A função retornaStatusIMC é utilizada para retornar o status do usúario com base no cálculo do IMC e por esse motivo ela está no contexto de cálculo IMC.
function retornaStatusIMC(imc){
    let status;

    if(imc < 18.5){
        status = 'Abaixo do peso';
    } else if(imc > 18.5 && imc < 24.9){
        status = 'Peso normal';
    } else if(imc > 24.9 && imc < 30){
        status = 'Acima do peso';
    } else {
        status = 'Thais Carla, é você???'
    }

    return status;
}

export{calculaIMC, retornaStatusIMC}