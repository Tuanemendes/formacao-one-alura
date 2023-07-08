# JavaScript: métodos de array

Fetch de livros no console

Como funciona o forEach

o método forEach() executa uma função dada para cada elemento do array.

```
let arr = [4,3,2,1];
arr.forEach((elemento,indice) => console.log(`elemento:${elemento}, indice:${indice}`))

```

Como funciona o map

O método map invoca a função passada por argumento para cada elemento do array e devolve um novo Array como resultado.

Desconto com map

```
function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosDesconto = livros.map(livro => {

        return { ...livro, preco: livro.preco - (livro.preco * desconto) }

    });

    return livrosDesconto;
}

```

Filter
Como funciona o filter
Filter de livros
Livros filtrados na tela
Cada aluno no seu curso

Como funciona o sort
sort de livros
Livros indisponíveis
Filtrando livros disponíveis
Ordenando números e palavras

Manipulando HTML com JS
Como funciona o reduce
Valor total com reduce
Outros métodos especiais
