var produto = {
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
};

var cliente = {
    id: 40,
    nome: "Jorge Mendes",
    telefone: "(11)99999-9999"
};

var dados = cliente

if(dados == cliente){

console.log("Id do cliente: "+cliente.id)
console.log("Nome do cliente: "+cliente.nome)
console.log("telefone do cliente: "+cliente.telefone)

} else if(dados == produto){

    console.log("Id do produto: "+produto.id)
console.log("Nome do produto: "+produto.nome)
console.log("Valor do produto: R$"+produto.valor)
}