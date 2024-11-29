let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if(comentario.indexOf(expressao_proibida) > -1){
    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");
} else{
    console.log("Seu comenário foi aprovado");
}

//O método indexOf é um ótimo recurso da linguagem JavaScript para encontrar termos simples dentro de textos grandes