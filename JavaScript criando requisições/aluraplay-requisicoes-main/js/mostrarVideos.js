import { conexaoApi } from "./conexaoAPI.js";

const list = document.querySelector('[data-list]');

export default function constroiCard(titulo, descricao, url, imagem){
    const video = document.createElement('li');
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`;
    return video;

}

async function mostraVideos(){
    try{
        const listaVideosApi = await conexaoApi.listaVideos();
        listaVideosApi.forEach(video => list.appendChild(
               constroiCard(
               video.titulo,
               video.descricao,
               video.url,
               video.imagem
           ))
       );
    }catch{
        list.innerHTML = `<h2 class="mensagem__titulo">Erro ao carregar os vídeos</h2>`
    }  
}

mostraVideos();