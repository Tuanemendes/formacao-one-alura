// var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(resposta => resposta.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error('Esse cep não existe!')
//         } else
//             console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluido!'));

// console.log(consultaCEP);

async function buscarEndereco(cep) {

    var mensagemErro = document.getElementById('erro-cep');
    mensagemErro.innerHTML = '';

    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertido = await consultaCEP.json(consultaCEP);
        if (consultaCEPConvertido.erro) {
            throw Error('Esse cep não existe!')
        }
        var endereco = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        endereco.value = consultaCEPConvertido.logradouro;
        bairro.value = consultaCEPConvertido.bairro;    
        cidade.value = consultaCEPConvertido.localidade;
        estado.value = consultaCEPConvertido.uf;

        console.log(consultaCEPConvertido);
        return consultaCEPConvertido;

    }catch(erro){
        mensagemErro.innerHTML = ` <p>CEP inválido! tente novamente.</p>`;
        console.log(erro);
    }

}

var cep = document.getElementById('cep');
    cep.addEventListener('focusout', () => {   
        buscarEndereco(cep.value);
});



// promisse.all fazer várias requisições ao mesmo tempo
// let ceps = ['01001000','01001001']
// let conjuntoEnderecos =  ceps.map(cep => buscarEndereco(cep));
// Promise.all(conjuntoEnderecos).then(respostas => console.log(respostas));