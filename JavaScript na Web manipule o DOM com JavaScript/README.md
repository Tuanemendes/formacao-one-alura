# DOM com JavaScript

Introdução

Criando tarefa no HTML
Manipulando o DOM
Percorrendo a árvore do DOM
Como o DOM funciona

Utilizamos o método querySelector para percorrer a árvore do DOM e encontrar o elemento que queremos utilizando JavaScript. Porém existem outros métodos que podem ser utilizados para o mesmo fim.

- document.getElementById(‘id’) seleciona o elemento pelo id passado.
- document.getElementsByClassName(‘classe’) retorna um array dos elementos pelo nome da classe passada.
- document.getElementsByTagName(‘tag’) retorna um array dos elementos pelo nome da tag passada
- document.querySelectorAll(seletor) devolve todos os seletores com o mesmo nome

Escutando Eventos

é necessario três ações para utilizar o escutador de eventos

Evento / Elemento que recebe o evento / O que vai acontecer quando o evento disparar

Capturando valor do input
Escutando evento de click
Comportamento do formulário

data-attributes -> nos permite armazenar informações extras em elementos HTML padrões e semânticos, sem a necessidades de hacks como classList (en-US), atributos fora do padrão, propriedades extras no DOM ou o método depreciado

Criando template
template de um parágrafo que receba tanto conteúdo HTML e JavaScript
utilizar o acento grave, precisamos utilizar a expressão ${ } que vai receber código JavaScript.

Adicionando Tarefa
Criando elemento

Element.appendChild -> anexa um elemento dentro do outro.

Element.classListé uma propriedade somente leitura que retorna uma DOMTokenListcoleção ativa dos class atributos do elemento. Isso pode então ser usado para manipular a lista de classes.
Embora a classList propriedade em si seja somente leitura, você pode modificar sua associação DOMTokenListusando os métodos add(), remove(), replace()e toggle().
Você pode testar se o elemento contém uma determinada classe usando o classList.contains()método

Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método appendChild que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai.

Existem outros métodos

insertBefore(pai, filho): Coloca um nó antes do outro.
replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
removeChild(elemento): Remove um nó da árvore.

Criando botão concluir
Concluindo a tarefa
Selecionando elemento pai
JavaScript IIFE

Removendo a tarefa
Criando módulos
Encapsulando Código
