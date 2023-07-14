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

    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertido = await consultaCEP.json(consultaCEP);
        if (consultaCEPConvertido.erro) {
            throw Error('Esse cep não existe!')
        }
        console.log(consultaCEPConvertido);
        return consultaCEPConvertido;

    }catch(erro){
        console.log(erro);
    }

}

// promisse.all fazer várias requisições ao mesmo tempo
// let ceps = ['01001000','01001001']
// let conjuntoEnderecos =  ceps.map(cep => buscarEndereco(cep));
// Promise.all(conjuntoEnderecos).then(respostas => console.log(respostas));