### HTML5 e CSS3 parte 2: posicionamento, listas e navegação


<h3>1. criação de uma nova página </h3>

* Implementação de uma nova página HTML de produtos 
* Implementação de imagem no cabeçalho e criação de uma lista;
* A tag <h1> envolve a tag da imagem, que é onde buscamos o conteúdo que será exibido.

```html
    <h1>
        <img src="">
    </h1>

```

<h3>2. Navegação entre páginas </h3>

* A tag <a> de ancoragem é utilizada para direcionar um texto ou uma imagem para outra página, Com o atributo href, teremos o endereço de destino de um link, podendo direcionar para e-mails, telefones, outros sites e abas;
* A propriedade text-transform é a responsável pela transformação do texto para maiúsculo, quando usamos o valor uppercase
*  Deixar texto em negrito no CSS font-weight: bold;
*  Display inline para deixa os elementos em linha;
* Remoção da decoração do texto com text-decoration: none;

<h3>3. Posicionamento dos elementos  </h3>

* Remover os estilos que o navegador cria automaticamente, então precisamos removê-lo, para que o estilo que criamos não seja influenciado pelo estilo que o navegador adiciona.

```css 
    /* reset */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

```
* Posicionamento:  position: absolute, é possível posicionar o elemento em qualquer lugar da página.
* melhor técnica para alinhar uma div ao centro é usar o cálculo da margin automático;

<h3>4.Tag section </h3>

* Utilizar as tags semânticas fazem com que o navegador entenda melhor o nosso conteúdo, e com isso carregue melhor a nossa página;
* Elemento que tem o seu display com o valor inline-block, o tamanho pode ser ajustado, tanto na largura, quanto na altura.
* Ao utilizar o padding o elemento aumenta o seu tamanho. Quando declaro que existe um espaçamento interno, estou aumentando o conteúdo.

<h3>5.Como lidar com bordas</h3>

* A borda fica posicionada entre o padding e a margin. abixo esta a declaração de borda;

```css
   border: 3px solid #000000;

```
* A propriedade border-radius, podemos desenhar o canto arredondado dos elementos.

<h3>6. Pseudo-classes CSS</h3>

* Em todos os elementos do HTML consigo mapear o comportamento com CSS e alterar o visual do elemento. 
* Comportamento do hover em um elemento é mapeado o comportamento do mouse por cima do elemento, e pode utilizar para destacar visualmente o elemento em questão.
* Algumas pseudo-classes CSS
    * hover, quando o usuário passa o cursor sobre o elemento;
    * active, quando um elemento está sendo ativado pelo usuário;


```css
/* Quando o usuário passar o cursor sobre algum link do menu de navegação, modifique a cor do seu texto.*/

   nav a:hover {
    color: #C78C19;
    text-decoration: underline;
}

```

```css
/* Quando algum item da lista de produtos estiver sendo ativado pelo usuário, modifique a cor da sua borda.*/

    .produtos li:active {
        border-color: #088C19;    
    }

```
```css
/* Quando o usuário passar o cursor sobre algum item da lista de produtos, modifique o tamanho do texto do seu h2.*/

    .produtos li:hover h2 {
        font-size: 34px;
    }

```

<h3>7. Finalização da página de produtos </h3>

* No CSS, ao referenciarmos o endereço de uma imagem, usamos o valor url;
* Quando colocamos uma imagem de fundo em um elemento, o CSS, por padrão, copia e cola a imagem diversas vezes até ocupar todo o espaço do elemento

```css

    footer {
        background-image: url(imagens/bg.jpg);
    }

```
* Os caracteres Unicode estão disponíveis para serem usados como um complemento ao nosso texto. -> &copy;




