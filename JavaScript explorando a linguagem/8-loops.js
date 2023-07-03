console.log(`\n Trabalhando com loops`);


const listaDeDestinos = new Array(
    `Minas Gerais`, `São Paulo`, `Rio de Janeiro`
);

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);


const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

// if (idadeComprador >= 18 || estaAcompanhada == true) {
//     console.log("Boa viagem!");
//     listaDeDestinos.splice(); // removendo item
//     temPassagemComprada = true;
// } else {
//     console.log("Não é maior de idade e não posso vender");
//     temPassagemComprada = false;
// }

// let contador = 0;
// let destinoExiste = false;
// while (contador < 3) {
//     if (listaDeDestinos[contador] == destino) {
//         console.log("Destino existe");
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// }

for (let index = 0; index < listaDeDestinos.length; index++) {
    const elemento = listaDeDestinos[index];
    if (elemento == destino) {
        destinoExiste = true;
    }    
}


console.log("Destino existe: ", destinoExiste);

console.log(listaDeDestinos);



