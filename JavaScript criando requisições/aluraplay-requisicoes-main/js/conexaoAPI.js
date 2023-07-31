async function listaVideos(){
    const coxecaoApi = await fetch('http://localhost:3000/videos');
    const conexaoConvertidos = await coxecaoApi.json();
    return conexaoConvertidos;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        }) // Aqui vai o objeto que será enviado para o servidor
    });

    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoBusca){
    const conexao = await fetch(`http://localhost:3000/videos/?q=${termoBusca}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conexaoApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}

