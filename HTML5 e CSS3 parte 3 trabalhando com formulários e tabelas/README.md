### HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas


<h3>1. Criação da pagina de contatos  </h3>

*  Um formulário pode servir para, entre outras coisas, enviar os dados para uma outra página, capturar informações que o usuário digitar e enviar dados para um servidor.

<h3>2. criação de formulário  </h3>

* A tag <label> sempre faz par com a tag <input> o que seria uma etiqueta para aquela entrada de dados;
* A conectar um input com o seu label Colocamos um id para o input e associamos esse id ao atributo for do label;
```html

    <label for="telefone">Telefone</label>
    <input type="text" id="telefone">

```

* A propriedade padding serve para alterarmos o espaçamento interno, entre o conteúdo e a borda.


<h3>3. tipos de campos </h3>

* A propriedade anem  de um input do tipo radio só pode ser "preenchida" uma única vez, por isso que, quando eu seleciono um dos itens, ele desmarca o outro, mantendo somente um selecionado.
* Aplicar configurações genericas para um css,Usar os seletores dos itens separados por vírgula ou criar uma classe; 
* Possui uma ordem de prioridades no seletores, força de repersentação do maior para o menor : `inline`-> `id` -> `tag.class`-> `class` -> `tag`
* A estrutura da tag <select> é composta de um ou mais <option>.

<h3>4. Melhorar a Semântica </h3>

* As tags <input> possui tipos de entradas e  dotar os tipos corretos facilita na inserção dos dados e facilitar a experiência do usuário; 
* Transformar um campo comum em um de preenchimento obrigatório pode se utilizar a propriedade required;
* Deixar uma opção marcada por padrão utilizando a propriedade `cheked`.
* Alguns tipos de inputs para celular: email, tel, number, password, date, datetime, month e search
* Exibir uma sugestão de preenchimento para os campos, através do atributo `placeholder`
* A tag <legend> que usamos para um título de um grupo de campos em qualquer formulário;
* Estruturar melhor o  código com fieldset e legend;

<h3>5. CSS avançado </h3>

* A transição visual de um elemento utilizando a propriedade `transition`;
* Utilizar a propriedade transform: scale() para aumentar proporcionalmente a escala de determinado elemento ou rotacioná-lo;
* A modificar o estilo do ponteiro do mouse, quando passar por cima de determinado elemento, através da propriedade CSS `cursor`;

<h3>6. Estrutura de tabelas</h3>

* Utilizar a tag <tr> para marcar uma linha de uma tabela.
* As tags <thead>, <tbody> e <tfoot> ajudam a deixar o conteúdo da tabela mais bem dividido e mais semântico.
* A criar uma tabela HTML
    * A tag table, que representa a tabela;
    * A tag tr, que representa a linha da tabela;
    * A tag td, que representa a célula da tabela;
    * A tag thead, que representa o cabeçalho da tabela;
    * A tag tbody, que representa o corpo da tabela;
    * A tag th, que representa a célula do cabeçalho da tabela;
    * A tag tfoot, que representa o rodapé da tabela;
* em uma tabela de 5 colunas, para ter uma célula única na linha, usamos um código assim:

```html
    <tr>
        <td colspan="5">Rio de Janeiro</td> 
    </tr>

```