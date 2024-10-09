var curiosidade_chuck_norris = [
    {titulo: "Suicida que não morre.", curiosidade: "Chuck Norris foi homem-bomba 34 vezes."},
    {titulo: "Manipulando o tempo.", curiosidade: "Chuck Norris não usa relógio. Ele decide que horas são."},
    {titulo: "Contando sem parar.", curiosidade: "Chuck Norris contou até o infinito. Duas vezes."},
    { titulo: "Cuidados com a higiene bucal", conteudo: "Chuck Norris usa arame farpado como fio dental."},
    { titulo: "Fórmula para maratonar séries", conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos."},
    { titulo: "Olhos que tudo veem", conteudo: "Chuck Norris já viu o homem invisível."},
    { titulo: "Praticando esportes radicais", conteudo: "Chuck Norris faz bungee jump sem corda."},
    { titulo: "Não vale chorar", conteudo: "Chuck Norris faz cebolas chorarem."},
    { titulo: "Tempero de fogo", conteudo: "Chuck Norris usa pólvora como tempero."},
    { titulo: "Extinção dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma."}
];

var tamanho_colecao = curiosidade_chuck_norris.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);
// Math.random() retorna um número aleatório entre 0 e <1 (1 não incluído).
// Math.floor() arredonda um número para baixo para o número inteiro mais próximo.

var curiosidade_escolhida = curiosidade_chuck_norris[numero_sorteado];

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADES SOBRE CHUCK NORRIS");
console.log("Título: "+titulo_curiosidade);
console.log("Conteúdo: "+conteudo_curiosidade);