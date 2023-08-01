import  validaCPF  from "./validacao-cpf.js";

const camposFormulario = document.querySelectorAll('[required]');

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur",()=> verificarCampo(campo));


});

function verificarCampo(campo){
    if(campo.name === "cpf" && campo.value.length >= 11){
        validaCPF(campo);

    }
}