//Contextos da Aplicação:

//Contexto de validação de peso e altura.


function validaPeso(peso){
    let pesoValido = false;

    if(peso > 0){
        pesoValido = true;
    }

    return pesoValido;
}

function validaAltura(altura){
    let alturaValida = false;

    if(altura > 0){
        alturaValida = true;
    }

    return alturaValida;
}

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

//Contexto de exibição.

// O restante do código assume o contexto de exibição, pois seu objetivo em conjunto é retornar o resultado do cálculo de IMC para o usuário.
let peso = 78;
let altura = 1.72;

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if(verificaPesoValido && verificaAlturaValida){
    
let resultado = calculaIMC(peso, altura);
let statusIMC = retornaStatusIMC(resultado)

console.log("Seu IMC é "+resultado+" e você está "+statusIMC);
} else {
    console.log("Peso e altura devem ser maiores que zero");
}

// Veja que mesmo em códigos mais complexos é possível identificar contextos bem definidos na sua estrutura.

// Em resumo, para dividir uma aplicação em camadas, basta você separar os blocos de código de acordo com seus contextos.