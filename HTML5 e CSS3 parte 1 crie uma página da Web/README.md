### HTML5 e CSS3 parte 1:  crie uma página da Web


<h3>1. Marcação de textos </h3>

* HTML significa Hyper Text Markup Language;
* É a linguagem de marcação padrão para criar páginas da Web;
* Descreve a estrutura de uma página da Web;
* Consiste em uma série de elementos;
* Elementos HTML informam ao navegador como exibir o conteúdo;
* As tags são semânticas e para cada uma delas temos um significado e um resultado diferente;
* definição o título e os parágrafos de um texto utilizando as tags <h1> e <p>;
* dar destaque para algumas informações do texto, deixando-as em negrito, utilizando a tag <strong>;
* dar ênfase para algumas informações do texto, deixando-as em itálico, utilizando a tag <em>;


<h3>2. Separação de conteudo e informações </h3>

* A tag DOCTYPE serve para informar ao navegador qual versão do HTML estamos usando;
* Passar as informações do encoding da nossa página para o navegador, através da tag <meta> e da propriedade charset: "charset="UTF-8" que  aponta para o  navegador que estamos usando um dicionário que tenha acentos e cedilha, sinais gráficos comuns na língua portuguesa;
* Na estrutura correta do HTML, inserimos as informações que queremos passar para o navegador no head e as tags de conteúdo no body;
* A tag <html>, que marca o conteúdo a ser renderizado no navegador;
* Para definir o título de uma página é através da tag <title>;
* Para separar as informações que estão sendo passadas para o navegador, utilizando a tag <head>;
* Para  separar o conteúdo da página, utilizando a tag <body>;


<h3>3. Utilização do CSS</h3>

* CSS 
* Separar a propriedade do valor no css -> "text-align: center" os dois ponto serve para atribuir o valor a uma propriedade;
* css em  line, é passado no html dentro da tag,; Obs.: não é muito usual. 

```html
  <h1 style="text-align: center;">Título</h1>

```

* outra forma de se passar o css  é colocar dentro da tag <head> é inserido a tag <style>; 

```html

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barbearia Alura</title>
    <style>
        h1{
            text-align: center;
        }

    </style>

</head>

```

* terceira forma que geralmente é utilizada é chamamos o arquivo que contem os estilos de style.css. e é necessário referenciar o arquivo style.css no head do index.html;

```html

    <link rel="stylesheet" href="style.css">

 ```

* Estilo em cascata funciona como é uma folha de estilos em cascata, a cascata vai descendo, e o que eu faço no elemento pai reflete para o elemento filho;
* Representação de cores no css pode ser em Hexadecimal, RGB e com os nomes das cores;
* 

<h3>4. Estilização de imagens</h3>

* Inserir imagens no HTML 

```html

    <img src="banner.jpg">

 ```
 * Ajuste de  altura do elemento, através da propriedade height;
 * Ajuste de  largura do elemento, através da propriedade width;
 * Ajuste de espaçamento interno do elemento, através da propriedade padding;
 * Ajuste de  espaçamento externo do elemento, através da propriedade margin;


<h3>5. Listas e divisões de conteudos</h3>

* Utilização de listas não-ordenadas <ul> e listas ordenadas <ol>
Para cada um dos itens da lista, utilizamos a tag <li>;
*  Utilização de classes no CSS que servem para marcar itens, que são repetíveis;

```css

    .itens {
        font-style: italic;
    }

 ```
* Divisões de conteúdo, utilizando a tag <div>;
* Comportamentos inline e block;


<h3>6. Finalização da página</h3>

* A tag header é uma tag de conteúdo do HTML, e não uma tag de estrutura. Não confunda head com header
* O cabeçalho da página deve ter mais destaque;
* O ideal é usarmos classes para tudo;
