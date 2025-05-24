/* O forEach pode ser utilizado para percorrer um array a fim de imprimir no terminal os itens de um carrinho de compras, como pode ser visto. */

const carrinho = [
    {nome: 'The Lenged of Zelda', qnt: 1, valor: 250},
    {nome: 'Super Mario Kart 8', qnt: 1, valor: 300},
    {nome: 'New Super Mario Bros.', qnt: 1, valor: 250}
];

function imprimirItem(produto, index){
    let texto = index + ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;

    console.log(texto);
}

// Utilizando forEach para imprimir os elementos do array.
carrinho.forEach(imprimirItem);

// Utilizei a função forEach para executar uma função em cada elemento do array.