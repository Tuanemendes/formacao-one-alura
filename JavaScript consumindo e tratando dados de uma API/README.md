# JavaScript: consumindo e tratando dados de uma API

## Aplicando a assincronicidade

construir um código com o  .then, um método que as Promises disponibilizam:

```
var requisicao = fetch("https://localhost:5000/")
.then(resposta => resposta.json())
.then(respostaConvertida => console.log(respostaConvertida));

```

reproduzir o mesmo código usando async await:

```
async function geraRequisicao() {
    var requisicao = await fetch(“https://localhost:5000”);
    var respostaConvertida = await requisicao.json();
}

```



Síncrono ou Assíncrono?
Event Loop e Call Stack
Leitura síncrona
Task Queue

## Aprofundando em promisses

Then e JSON
Convertendo dados
Tratando erros com catch
Finally

## Criando funções assícronas

Async Await
Alternando conhecimentos
Tratamento de erros
Promise All

## Manipulando formulários

Consulta dinâmica
Escutando eventos
Preenchimento automático
Evitando problemas
