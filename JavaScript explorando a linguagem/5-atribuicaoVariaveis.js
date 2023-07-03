console.log('Trabalhando com atribuição de variáveis');

//atribuição e imutabilidade

const idade = 29;
const nome = "Tuane";
const sobrenome = "Mendes";

console.log(nome + " " + sobrenome);

console.log('nome, sobrenome');

//usando template string com crase

console.log(`Meu nome é ${nome} ${sobrenome}`);


// nome = nome + sobrenome; //não pode reatribuir valor a uma constante
// console.log(nome);

//usando let para variáveis

let nome2 = "Tuane";
console.log(nome2);
nome2 = 2 ;
console.log(nome2);