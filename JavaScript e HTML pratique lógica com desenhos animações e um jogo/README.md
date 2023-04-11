# JavaScript e HTML  


<h3>1. Desenho com canvas </h3>

* Utilização da tag  <canvas> que cria a tela de desenho e dizer qual será sua altura e largura. 
* respeitar os limite do canvas. 
* fillStyle recebe uma propriedade; 
* fillRect(0,0,0,0) criação de um retangulo;
* beginPath();  é um método da interface CanvasRenderingContext2D do HTML5 que é usada para criar um novo caminho vazio.
* moveTo(x,y);
* lineTo(x,y); usada para adicionar um ponto final a um caminho criado com o método beginPath().
* fill();  preencher o caminho com uma cor sólida.

``` html
<canvas width="600" height="400"></canvas>
<script>

</script>

```

<h3>2. Extração de funções  </h3>

* Desenhar quadrados utilizando função lembrando que função possui uma série de instruções para executar um único comportamento;
* consultar mais sobre o canvas em  (CanvasRenderingContex2D)[https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#fill_and_stroke_styles] 
* utilidade de funções ; evitar repetição de código, Deixar o código mais organizado e legível, automatizar tarefas com código mais genérico;
* Todo loop precisa de uma linha de código dentro dela que serve para mudar a condição atual;
* Temos o loop While e o For;
*  Loops execitam enquanto a condição passada 'normalmente entre parênteses ()' for verdadeira;
* x é uma variável, ou seja, um espaço na memória onde podemos guardar valores e utilizá-los no código. Então, se a variável x guarda o valor 0 no início do código, em todos os lugares onde passarmos x no código, o programa vai automaticamente substituir pelo valor de 0. Essa lógica continua funcionando depois de modificarmos o valor de x, por exemplo com a instrução x = x + 50 pode ser verificado no código abaixo ;

```javascript
var x = 0;

while(x < 600) {
  desenhaQuadrado(x, 0, 'green');
  x = x + 50;
}

for(var x = 0; x < 600; x = x + 50) {
  desenhaQuadrado(x, 0, 'green');
}

```

<h3>3. interações do usuarios</h3>

* JavaScript permite trabalhar com eventos;
* Utilização da propriedade onclick que é chamada quando por uma função é atribuida quando chamada.
* Dentro a função é necessario passar um paramento para captura o evento de MouseEvent
* Projeto para aumentar o tamanho do circulo com a tecla SHIFT 'evento.shiftKey' e diminuir o tamanho do circulo com a tecla ALT 'evento.altKey';
* Projeto desenhar com o mouse 'onmousemove'  Existem os eventos, onmousedown e onmouseup.O primeiro é disparado toda vez que o botão esquerdo do mouse é pressionado e o segundo quando ele é solto.
* Funções Anônimas não possui nomes pode ser atribuida diretamente para uma variável ou a uma propriedade;
* Projeto de infinitas cores colcar  um input em tela para selecionar a partir de uma paleta de cores  escolher a cor para desenhar utilizando HTML e Javascript;
* Projeto de logica para pegar o centro de um alvo utilizando as coordenada x e y; 



```javascript

    // atribuindo diretamente a função anônima
    tela.onmousedown = function() {

        desenha = true;
    }

    // atribuindo diretamente a função anônima
     tela.onmouseup = function() {

        desenha = false;
    }

```

<h3>4. Movendo elementos</h3>

* 

```javascript


```
<h3>5. criação de um jogo </h3>


