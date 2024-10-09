var colecao_series_programacao = [
    {nome: "Breaking Bad", horario: "21h", sinopse: "Um professor de quimica se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime."},
    {nome: "Fargo", horario: "22h", sinopse: "Uma sequencia de crimes saem errado e são investigados por um detetive."},
    {nome: "Lost", horario: "20h", sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver."},
    {nome: "Prison Break", horario: "23h", sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do  vice-presidente dos EUA."},
    {nome: "Black Mirror", horario: "23h", sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios."},
    {nome: "Pessoa de interesse", horario: "20h", sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultra-secreto."},
    {nome: "DArk", horario: "22h", sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();

var dia_semana = data_atual.getDay(); // getDay() retorna o dia da semana com valores de 0 a 6. Usamos o valor retornado para acessar um objeto da coleção.

var serie_do_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de "+nome_serie+" às "+horario_serie);
console.log("A seguir uma visão geral da série: "+sinopse_serie);