
const elementoParaInserirLivros = document.querySelector('[data-livros]');

const totalLivrosDiposniveis = document.querySelector('[data-total-livros-dipoviveis]')

function exibirLivros(listaLivros) {
    elementoParaInserirLivros.innerHTML = '';
    listaLivros.forEach(livro => {

        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
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


function verificardiponibilidadeLivro(livro) {
    // if(livro.quantidade > 0) {
    //     return 'livro__imagens';
    // }else{
    //     return 'livro__imagens indisponivel';
    // }
    

}