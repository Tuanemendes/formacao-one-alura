
const elementoParaInserirLivros = document.querySelector('[data-livros]');


function exibirLivros(listaLivros) {
    elementoParaInserirLivros.innerHTML = '';
    listaLivros.forEach(livro => {

        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}a</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div> 
        
        `
    });

};
