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

* Compreensão dos dois mundos HTML e Javascript; 
* Pode ser escrito textos dentro do Javascript utilizando o 'document.write("texto")';
* Uma das vantagens da utilização do texto dentro do javascript é a manipulação de texto com cálculos, assim se torna dinamico;
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
* retribuição de uma variável para ser alterdo o valor;
* variável sem iniciar com a letra minúscula e outras palavras em sequência tem  o inicio em letra maiúscula 'idadeTutu';
* A variável os tipos string que seria tipo texto e o tipo número, tipo lógico;
* Função para arrendondr valores  Math.round();

```javascript

<meta charset="UTF-8">

<script>

    var media = (39 + 20 + 41) / 3;

    document.write('A média das idades é ' + Math.round(media));


</script>

```

<h3>4. Criação de funcionalidades</h3>

* Criação de função para instruções dentro do código e facilita a reutilização;
* Criar bons nomes de funções; 
* Deve ser declarada com a palavra reservada <b>funtion</b>, deve ser usar parenteses '()' e possui um bloco com abre e fecha chaves '{}';
* Funções é possivel passar parametros;
* Parametros são valores que são passados dentro dos parenteses para ser alterado dinamicamente de acordo com que for passado;
* É possível ter instruções de  outras funções dentro de uma função criada; 

```javascript

<meta charset="UTF-8">

<script>

    function pulaLinha() {

        var pulaLinha = "<br><br><br>";
        document.write(pulaLinha);
    }

    function mostraMensagem(messagem) {

        document.write(messagem);
        pulaLinha();

    }

    var ano = 2016;

    mostraMensagem("Flávio tem " + (ano - 1977) + " anos");
    mostraMensagem("Joaquim tem " + (ano - 1996) + " anos");
    mostraMensagem("Barney tem " + (ano - 1976) + " anos");
    mostraMensagem("Olá, Seja bem vido!");

</script>

```
<h3>5.pratica resolvendo problemas </h3>

* Criação de funções para calcular imc; 
* funções com retorno de resuldado;
* interação com usuario tratamento para funções genericas;
* Função 'promt()' é um função que recebe parâmetro e possui retorno;


```javascript

    function nomeDaFuncao(parametro1, parametro2) {

        var resultado = parametro1 / (parametro2 * parametro2);

        return resuldado;
    }

    function nomeDaFuncao(parametro1, parametro2) {

        // mesmo resultado na função acima

        return  parametro1 / (parametro2 * parametro2);
    }

```

<h3>6. Execução de código diferentes</h3>

* Leiura do pront sempre será texto ; 
* conversão do tipo sprint para o tipo número com 'parseInt()'; 
* Função para gerar números aleatorios de 0 até 10  Math.random() * 10
* Utilização da função console.log(); para imprimir o texto no console do navegador com a mensagem de log;

```javascript

    var vitorias = parseInt(prompt("Entre como número de vitorias: "));
    var empates = parseInt(prompt("Entre com o  número de empates: "));
    
    var a = parseInt("10");
    var b = parseInt("Calopsita");
    var c = parseInt(10); 

    mostraMensagem(a); //saída 10 
    mostraMensagem(b); // saída NaN
    mostraMensagem(c); //saída 10

```
* Condições utilizandoa condição "se" 

``` javascript

    //vários if's 

    if (valor > 28) {
        mostraMensagem("Seu time está melhor do que o ano passado. ");
    }
    if (valor < 28) {
        mostraMensagem("Seu time está pior do que o ano passado. ");
    }

```
* condição se então 
``` javascript

    //vários if e else

    if (valor > 28) {
        mostraMensagem("Sim");
    }else {
        mostraMensagem("Não");
    }

```
* utilização do operador and no código é representado pelo & comercial =>  && só passa dentro do if se todas as condições forem verdadeiras; 

``` javascript

    if( idade >= 18 && temCarteira == "S") {
        mostra("Pode dirigir");
    } else {
        mostra("Não pode dirigir");
    }

```

<h3>7. Retição de tarefas</h3>

* estrutura de  repedição com o while 

```javascript

//estrutura while

        var contador = 1;

        while( contador <= 10 ) {

            mostra("Texto");
            contador = contador + 1;
        }

```
* Para saber se um valor é NaN precisamos usar uma função específica, a isNaN. Essa função recebe um parâmetro e retorna true ou false caso o valor seja NaN ou não;
* não é necessário testar se true é igual a true pode ser passado direto dentro de uma condição como  

```javascript

        var idade = parseInt(prompt("Digite sua idade"));

        while( isNaN(idade) ) {
            idade = parseInt(prompt("Digite sua idade"));    
        }

        alert(idade);

```
* Loop for;
* incremento é utilizado ++  o decremento --;

```javascript

        for( var contador = 1; contador <= 10; contador = contador + 1 ) {
            alert("Contador atual: " + contador);
        }
    
```
* a utilização do break para finalinar um loop;
* utilização de for aninhado;

```javascript

     for (var linha = 1; linha <= 3; linha++) {

        for (var coluna = 1; coluna <= 5; coluna++) {
            document.write("*");
        }
        pulaLinha();
    }

```
<h3>8.Novas interações como usuario </h3>

* tags de interção com o usuario '<input/>' e '<button></button>';

```javascript

    <input />
    <button>Clique-me</button>

    <script>
        var entrada = document.querySelector("input");
        var botao = document.querySelector("button");
    </script>
```
* Função de clicar no botão 
* Utilização do value para pegar o valor dentro da tag de entrada de dados => '.value';
* Utilixação a função para 'input.focus();' para dar foco no na entrada de dados;

```javascript

    <button>Clique-me</button>

    <script>
        
        function tchau() {

            alert("Tchau!!!!!")
        }

        var button = document.querySelector("button");
        button.onclick = tchau;

    </script>
```
<h3>9. Trabalhando com muitos dados</h3>

* Trabalhando com listas (array) e é declarado com colchetes =>    var array = [5, 7, 10, 2];
* Esses elementos podem ser de qualquer tipo conhecido do JavaScrip;
* Utilização metodo 'length' ele retorna a quantidade de elementos que tem dentro de um array;
* Quando queremos acessar um elemento específico do array, precisamos passar seu índice, ou seja, sua posição na lista. Contudo, precisamos estar muito atentos porque os índices do array começam de 0 até o tamanho do array menos um;
* Todo array possui a função push que permite "empurrar" elementos para dentro da lista.
* criação de uma lista de items que não se repetem; 

