# JavaScript e HTML  


<h3>1. Iniciando a  programação </h3>

* o ambiente de desenvolvimento não é complexo;
* utilização de um navegador de internet;
* utilização de editores de código; 
* HTML é uma linguagem de marcação;
* A tag '<br>' não possui marcação só é utilizada para pular linha; 
* O HTML é estático e o navagedor entende outra linguagem sendo JavaScript possibilitando ações na página HTML; 
* Para o navagedor interpretar o Javascript é necessario utilizar a tag '<Script></script>';
* Todo texto em JavaScript fica em aspas;

``` html

<meta charset="UTF-8">
<h1>Usando JavaScript pela primeira vez</h1>
<script>
    alert("Este é um popup em JavaScript");
</script>

```

<h3>2. Comunicação com o usuario  </h3>

* Compreesão dos dois mundos HTML e Javascript; 
* Pode ser escrito textos dentro do Javascript utilizando o 'document.write("texto")';
* Uma das vantagens da utilização do texto dentro do javascript é a manipualação de texto com calculos, assim se torna dinamico;
* concatenação do tipo texto com numeros 

```javascript

<meta charset="UTF-8">

<script>

    document.write("A idade de Tutu é <br> ");
    document.write(18 + 20 + "<br>");
    document.write("18" + "20" + "<br>");
    document.write("18" + 20);

</script>

```

<h3>3. Programa dinâmico com variáveis</h3>

* criação de variaveis 
* Variáveis facilitam a manuteção no código;
* retrinuição de da variável para ser alterdo o valor;
* variável sem incia com com a letra minuscula e outras palavras em sequência tem  o inicio em letra maiuscula 'idadeTutu';
* a variavel os tipos string que seria tipo texto e o tipo número, tipo lógico;


```javascript

<meta charset="UTF-8">

<script>

    var media = (39 + 20 + 41) / 3;

    document.write('A média das idades é ' + Math.round(media));


</script>

```

<h3>4. Criação de funcionalidades</h3>



