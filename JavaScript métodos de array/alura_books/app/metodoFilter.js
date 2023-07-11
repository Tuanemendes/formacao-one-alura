const botoes = document.querySelectorAll('[data-btn-livros ]');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {

    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0  ) : livros.filter(livro => livro.categoria == categoria);

    exibirLivros(livrosFiltrados);

};
