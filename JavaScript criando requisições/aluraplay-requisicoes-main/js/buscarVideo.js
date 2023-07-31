import { conexaoApi } from "./conexaoAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideos(evento){
    evento.preventDefault();
    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conexaoApi.buscaVideo(dadosPesquisa);
    const list = document.querySelector('[data-list]');

    while(list.firstChild){
        list.removeChild(list.lastChild);
    }

    busca.forEach(video => list.appendChild(constroiCard(video.titulo, video.descricao, video.url, video.imagem)))

    if(busca.length == 0 ){
        list.innerHTML = `<h2 class="mensagem__titulo">Nenhum vídeo encontrado</h2>`
    }

}


const btnPesquisa = document.querySelector("[data-btn-pesquisa]");
btnPesquisa.addEventListener("click",evento => buscarVideos(evento));