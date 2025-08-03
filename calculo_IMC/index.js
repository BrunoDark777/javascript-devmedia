//Contextos da Aplicação:
import { validaPeso, validaAltura } from "./pesoAlturaValidacao.js";
import { calculaIMC, retornaStatusIMC } from "./calculadora.js";


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