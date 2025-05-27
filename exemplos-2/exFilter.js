const carros = [
      {marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015},
    {marca: 'GM', modelo: 'Onix', anoFabricacao: 2018},
    {marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018},
    {marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020}
];

function retornarCarroFiat(carro){
    return (carro.marca == 'Fiat');
}

const carroFiat = carros.filter(retornarCarroFiat);

console.log(carroFiat);

// A função filter() permite filtrar um array utilizando uma função para isso.