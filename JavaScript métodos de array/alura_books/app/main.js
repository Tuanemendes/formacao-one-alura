
let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosApi();


async function getBuscarLivrosApi() {

    const response = await fetch(endpointAPI);
    livros = await response.json();
    let livrosDesconto = aplicarDesconto(livros);
    exibirLivros(livrosDesconto);

};


