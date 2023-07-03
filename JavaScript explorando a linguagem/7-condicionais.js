console.log('Condicionais')

console.log(`Trabalhando com listas`);
const minasGerais = `Minas Gerais`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis`);
console.log(minasGerais, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `minaGerais`, `saoPaulo`, `rioDeJaneiro`
);

console.log("Destinos possíveis");
console.log(listaDeDestinos);


const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item       
// }else{
//     if(estaAcompanhada == true){
//         console.log("Comprador é menor de idade, mas está acompanhado");
//         listaDeDestinos.splice(1,1); //removendo item
//     }else{
//         console.log("Não é maior de idade e não posso vender");
//     }

// }


if (idadeComprador >= 18) {
    console.log("Comprador maior de idadade");
    listaDeDestinos.splice(1, 1); // removendo item
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removedo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}



console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);



