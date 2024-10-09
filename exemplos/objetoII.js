var usuario = {
    id: 2,
    nome: "Rafael Nogueira Lemos",
    idade: 17
};

var atendeAClassificacaoEtaria = usuario.idade >= 18

if(atendeAClassificacaoEtaria === true){

    console.log("Acesso permitido ao conteúdo");

} else{
    console.log("O usuario ainda não pode assistir o conteúdo");
}