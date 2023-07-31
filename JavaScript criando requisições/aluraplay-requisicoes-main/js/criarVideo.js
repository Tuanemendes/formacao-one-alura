import { conexaoApi } from "./conexaoAPI.js";

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento){
    evento.preventDefault();//evita que o formulario seja enviado e a pagina seja recarregada
    const imagem = document.querySelector('[data-imagem]').value;
    const url  = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();
    
    try{
        await conexaoApi.criaVideo(titulo, descricao, url, imagem);
        window.location.href = "../pages/envio-concluido.html";
    }catch(erro){
        alert(erro);
    }
    
}

formulario.addEventListener('submit', evento => criarVideo(evento));