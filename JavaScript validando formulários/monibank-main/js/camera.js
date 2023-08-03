const botaoCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]'); 
const tirarFoto = document.querySelector('[data-tirar-foto]');
const fotoCanvas = document.querySelector('[data-video-canvas]');
const mensagemFoto = document.querySelector('[data-mensagem]');
const btnEnviarFoto = document.querySelector('[data-enviar]');

let imagemURL = "";


botaoCamera.addEventListener("click", async function () {
    const inicializaCamera = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    });
    botaoCamera.style.display = "none";
    campoCamera.style.display = "block";
    video.srcObject = inicializaCamera;
});

tirarFoto.addEventListener("click", function() {
    fotoCanvas.getContext('2d').drawImage(video, 0, 0, fotoCanvas.width, fotoCanvas.height);
    imagemURL = fotoCanvas.toDataURL("image/jpeg");
    campoCamera.style.display = "none";
    mensagemFoto.style.display = "block";
});


btnEnviarFoto.addEventListener("click",() => {
    const receberDados = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDados);
    converteRetorno.foto = imagemURL;
    localStorage.setItem("cadastro", JSON.stringify(converteRetorno));

    window.location.href = "./abrir-conta-form-3.html";

});