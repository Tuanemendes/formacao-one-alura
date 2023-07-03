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


console.log("Adicionando um item na lista");
listaDeDestinos.push(`Curitiba`); //adicionando um item na lista
console.log(listaDeDestinos);


console.log("Removendo um item da lista");
listaDeDestinos.splice(2, 1); //removendo um item da lista
console.log(listaDeDestinos);

console.log("Mostrando itens da lista");
console.log(listaDeDestinos[1], listaDeDestinos[0]);


//let new = 2 ; //não pode criar variável com nome reservado