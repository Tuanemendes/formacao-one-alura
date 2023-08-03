import  validaCPF  from "./validacao-cpf.js";
import maiorIdade from "./validacao-idade.js";

const camposFormulario = document.querySelectorAll('[required]');

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur",()=> verificarCampo(campo));
    campo.addEventListener("invalid",event => event.preventDefault()); // impede o comportamento padrão do navegador 


});

function verificarCampo(campo){
    if(campo.name === "cpf" && campo.value.length >= 11){
        validaCPF(campo);   

    }
    if(campo.name === "aniversario" && campo.value != " " ){
        maiorIdade(campo);
    }
    console.log(campo.validity)
}

