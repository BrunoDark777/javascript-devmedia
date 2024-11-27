let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if(tamanho > 100){
    resumo = conteudo.substring(0,97);
} else{
    resumo = conteudo;
}

console.log(resumo);

/* Além do método substring(), o JavaScript também possui outro método para extrair substrings, conhecido como substr().

O método substr() não deve ser mais utilizado, pois foi descontinuado e em breve os navegadores não darão mais suporte a ele.

Sempre que precisar retornar uma parte de uma string, é recomendado utilizar o método substring()."

Ao utilizar o substring(), o recomendado é sempre trabalhar com os valores referentes a posição inicial e posição final da string que será extraída. */