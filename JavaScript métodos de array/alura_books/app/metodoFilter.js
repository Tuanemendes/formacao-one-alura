const botoes = document.querySelectorAll('[data-btn-livros ]');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {

    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria == 'disponivel' ? fitroPorDisponivel() : filtroPorCategoria(categoria);

    exibirLivros(livrosFiltrados);

    if(categoria == 'disponivel') {
        const valorTotal = calcularValorTotalLivrosDiponiveis(livrosFiltrados);
        
        exibirValorTotalLivrosDisponiveis(valorTotal);
    }

};


function filtroPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function fitroPorDisponivel() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosDisponiveis(valorTotal) {

    totalLivrosDiposniveis.innerHTML =`     <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`;
}