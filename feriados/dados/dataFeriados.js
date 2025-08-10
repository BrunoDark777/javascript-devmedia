//Camada de Dados:

// Esse arquivo é nossa camada de dados e o primeiro arquivo consumido pela camada de serviço.

const feriadosNacionais = [
    {nome: "Confraternização Universal", data: "01/01"},
    {nome: "Tiradentes",                 data: "04/21"},
    {nome: "Dia do Trabalhador",         data: "05/01"},
    {nome: "Independência do Brasil",    data: "09/07"},
    {nome: "senhora Aparecida",          data: "10/12"},
    {nome: "Finados",                    data: "11/02"},
    {nome: "Proclamação da República",   data: "11/15"},
    {nome: "Natal",                      data: "12/25"}
// As datas estão no formato americano (mm/dd).

// O motivo disso é que por padrão, o JavaScript utiliza o formato americano quando precisamos fazer cálculos e comparações que envolvem datas.
];

export default feriadosNacionais;