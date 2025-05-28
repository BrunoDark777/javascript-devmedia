let tabela = [
    {equipe: 'São Paulo', pontos: 25},
    {equipe: 'Corinthians', pontos: 47},
    {equipe: 'Santos', pontos: 39},
    {equipe: 'Palmeiras', pontos: 16}
];

function ordenaMaisPontos(a, b){
    return b.pontos - a.pontos;
}

tabela.sort(ordenaMaisPontos);

for(let i = 0; i < tabela.length; i++){

    let posicao = i+1;
    console.log(posicao+" | "+tabela[i].equipe+" - "+tabela[i].pontos+" pts");
}

/* O sort é um recurso que nos permite organizar dados de um array de uma forma simples e rápida através de funções padrão que determinam as regras de ordenação do array. */