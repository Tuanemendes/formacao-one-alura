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

o método filter() cria um novo array com todos os elementos que passam no testes implementado pela função fornecida , a principal diferença dele, para entendermos como ele funciona, é o seguinte: temos um array, com determinados valores, sejam eles idades, categorias, alguma coisa e queremos filtrar, criando um novo conjunto de elementos, uma nova array.

Filter de livros
Livros filtrados na tela
Cada aluno no seu curso

Como funciona o sort

array.prototype.sort(), o método sort ordena os elementos do próprio array e retorna o array, retorna o array ordenado. A ordenação não é necessariamente estável.

sort de livros
Livros indisponíveis
Filtrando livros disponíveis
Ordenando números e palavras

Manipulando HTML com JS
Como funciona o reduce

o método reduce executa uma função reduce fornecida por você para cada elemento do array, resultando em um único valor de retorno.

Valor total com reduce
Outros métodos especiais
