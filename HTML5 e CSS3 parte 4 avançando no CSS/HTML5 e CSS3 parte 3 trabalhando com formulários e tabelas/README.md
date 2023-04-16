### HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas


<h3>1. Adaptar a página home </h3>

* Só devemos usar <section> quando o bloco for semântico;
*  `float` Descolar o elemento na lateral e deixar os outros elementos ao redor. O float:left quanto o float: right servem para que o elemento se destaque na tela, deixe de ocupar o espaço em que estava, para que os outros elementos possam se posicionar ao redor dele;
* Limpar o float, com a propriedade clear do CSS;

<h3>2. Conteúdo externo</h3>

* Usar fontes externas é uma alternativa muito funcional para termos mais opções, que deixam o nosso site mais bonito e exclusivo, e também padronizado em todos os navegadores.
```html

    <!-- link é inserido dentro da tag <head> -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    
```
* Como incorporar um mapa e video à nossa página;

```html

<!-- pegar o link no google maps e inserir no html o mesmo é realizado com video do youtube -->
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.407977726918!2d-46.6372130252192!3d-23.589697062632787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bd9bb943bf5%3A0x6f642995c970f0fe!2scaelum%20alura!5e0!3m2!1spt-BR!2sbr!4v1681614623772!5m2!1spt-BR!2sbr"
            width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
       
    
```

<h3>3. Refatorar o CSS</h3>

* Aplicar um dregradê background: linear-gradient(gray, yellow, red, orange, blue);
* Quando queremos criar um elemento na página, via CSS, antes do elemento do HTML, usamos a propriedade :before.

<h3>4. Selecionar qualquer coisa</h3>

* Seletores avançados CSS
    * Seletor >, para acessar os filhos de determinado elemento. Por exemplo, para acessar todos os p dentro de main:

    ```css

    main > p {
    }

    ```
    * Seletor +, para acessar o primeiro irmão de determinado elemento. Por exemplo, para acessar o primeiro p após um img:

    ```css

    img + p {

    }
    
    ```
    * Seletor ~, para acessar todos os irmãos de determinado elemento. Por exemplo, para acessar todos os p após um img:

    ```css

    img ~ p {

    }
        
    ```
    * Seletor not, para acessar os elementos, exceto algum. Por exemplo, para acessar todos os p dentro de main, exceto o p que tem id missao:

    ```css

    main p:not(#missao) {

    }
        
    ```

* Selecionar o ultimo o <h2>

```html

    <h2>
    <section>
        <h2>
        <p>
        </p>
        <h2>
    
```

```css

    section > p + h2 {
        
    }
    
```
* Como fazer contas com CSS, com a propriedade calc
* Usar as medidas proporcionais para deixar um elemento de 100% de largura com o equivalente a um terço do elemento pai, menos 10px;
 
 ```css

    main {
       width: calc( (100% / 3) - 10px ); 
        /* ou */
       width: calc( 33% - 10px )
        
    }

``` 


<h3>5. Opacidade e sombra</h3>

* Todos os elementos e todas as cores podem ter uma camada de opacidade.
* Sombra interna em um elemento

 
 ```css

    .image {

        box-shadow: inset 0 0 5px black;
        
    }

``` 

<h3>6. Designe responsivo</h3>

* Design responsivo: como ajustar o estilo da nossa página de acordo com o tamanho da tela do dispositivo que a acesse;
* Marcar um elemento para que ele seja apresentado de outra forma, em uma tela de até 480px

 ```css

    @media screen and (max-width: 480px) {

        body {
            background: red;
        }
    }

``` 

* Principal tática para não perder muito tempo criando layouts responsivos:
    * Criar um layout fluido que se adapte sempre;
    * Usar medidas proporcionais para tudo;