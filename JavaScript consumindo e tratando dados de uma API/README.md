# JavaScript: consumindo e tratando dados de uma API

## Entendendo o JavaScript


Síncrono ou Assíncrono?

Síncrono: As operações síncronas são executadas em sequência, uma após a outra. Cada operação precisa ser concluída antes que a próxima possa começar. Isso significa que o programa aguardará a conclusão de uma tarefa antes de prosseguir para a próxima. 


```
console.log("Início");

// Operação síncrona
console.log("Tarefa 1");
console.log("Tarefa 2");
console.log("Tarefa 3");

console.log("Fim");


```
Assíncrono: As operações assíncronas permitem que o programa execute várias tarefas simultaneamente, sem bloquear a execução do código. Essas tarefas podem ser executadas em segundo plano, enquanto o programa continua a executar outras operações. Em operações assíncronas, você define uma função de retorno de chamada (callback) ou usa promessas para lidar com o resultado da tarefa quando ela estiver concluída.


```
console.log("Início");

// Operação assíncrona com callback
setTimeout(function() {
  console.log("Tarefa assíncrona concluída");
}, 2000);

console.log("Fim");



```

Event Loop e Call Stack

Call Stack (Pilha de Chamadas):
O Call Stack é uma estrutura de dados que registra as chamadas de função em execução no momento. Ele segue o princípio Last In, First Out (LIFO), o que significa que a última função a entrar na pilha é a primeira a sair. Quando uma função é chamada, ela é adicionada ao topo da pilha, e quando a função é concluída, ela é removida da pilha. O Call Stack mantém o controle do fluxo de execução do programa.

```
function funcao1() {
  console.log("Executando função 1");
  funcao2();
}

function funcao2() {
  console.log("Executando função 2");
}

funcao1();


```

Event Loop (Laço de Eventos):
O Event Loop é um mecanismo responsável por coordenar o fluxo de execução no JavaScript. Ele monitora continuamente a pilha de chamadas (Call Stack) e a fila de tarefas (Task Queue). Quando o Call Stack está vazio, o Event Loop verifica se há tarefas na Task Queue. Se houver uma tarefa, o Event Loop move a próxima tarefa da fila para o Call Stack, permitindo que ela seja executada.


Task Queue

Task Queue (Fila de Tarefas):
A Task Queue é uma fila que armazena tarefas assíncronas para serem executadas pelo Event Loop. Quando uma operação assíncrona é concluída, ela é colocada na Task Queue. Essas tarefas aguardam sua vez para serem movidas para o Call Stack e executadas.


Resumo: 
Call Stack rastreia a execução das funções, o Task Queue armazena tarefas assíncronas concluídas e o Event Loop coordena a execução entre o Call Stack e o Task Queue, garantindo que as tarefas assíncronas sejam executadas quando a pilha de chamadas estiver vazia.

## Aplicando a assincronicidade

Callback

Um callback em JavaScript é uma função que é passada como argumento para outra função e é executada posteriormente, geralmente quando um evento ou uma tarefa assíncrona é concluída. 
O objetivo de um callback é permitir que o código assíncrono seja executado em um momento posterior, em vez de bloquear a execução do programa.


```
function operacaoAssincrona(callback) {
  setTimeout(function() {
    // Simulando uma tarefa assíncrona
    console.log("Operação assíncrona concluída");
    callback();
  }, 2000);
}

function callback() {
  console.log("Callback executado");
}

operacaoAssincrona(callback);



```


Fetch API

A Fetch API é uma interface do JavaScript que fornece uma maneira simples e poderosa de fazer requisições HTTP assíncronas, buscando recursos de um servidor. Ela substitui, em grande parte, o uso do antigo objeto XMLHttpRequest.
método Fetch é assíncrono e tem como parâmetro obrigatório a URL da API.

```
 var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')

```
API é uma sigla que significa Interface de Programação de Aplicações. 



Promises
É um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e o valor resultante dessa conclusão. Ela é uma abstração poderosa que simplifica o tratamento de operações assíncronas e ajuda a lidar com fluxos de código complexos.

Uma Promise pode estar em um dos três estados:

Pending (Pendente): O estado inicial de uma Promise, quando a operação assíncrona ainda não foi concluída.

Fulfilled (Realizada): A operação assíncrona foi concluída com sucesso, e o resultado está disponível.

Rejected (Rejeitada): A operação assíncrona falhou, e um motivo de rejeição (um erro) está disponível.


## Aprofundando em promisses

Then e JSON

construir um código com o  .then, um método que as Promises disponibilizam:

```
var requisicao = fetch("https://localhost:5000/")
.then(resposta => resposta.json())
.then(respostaConvertida => console.log(respostaConvertida));

```

Convertendo dados
Tratando erros com catch
Finally

## Criando funções assícronas

Async Await

reproduzir o mesmo código usando async await:

```
async function geraRequisicao() {
    var requisicao = await fetch(“https://localhost:5000”);
    var respostaConvertida = await requisicao.json();
}

```

Alternando conhecimentos
Tratamento de erros
Promise All



```
// promisse.all fazer várias requisições ao mesmo tempo
    let ceps = ['01001000','01001001']
    let conjuntoEnderecos =  ceps.map(cep => buscarEndereco(cep));
    Promise.all(conjuntoEnderecos).then(respostas => console.log(respostas));


```

## Manipulando formulários

Consulta dinâmica
Escutando eventos
Preenchimento automático
Evitando problemas
