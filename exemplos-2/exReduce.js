// Um exemplo do reduce sendo usado para reduzir um array a um número.

const itensCarrinho = [
    {id: 1, nome: 'Açucar', qnt: 2, valor: 2.00},
    {id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95},
    {id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50},
    {id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00}
];

function somarValor(total, itemCarrinho){
    const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;

    return total + valorTotal;
}

const valorApagar = itensCarrinho.reduce(somarValor, 0);

console.log(valorApagar);

// Resultado impresso será 160.85

// Reduce reduz um array a um único valor.