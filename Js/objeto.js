// Declarando objeto de forma literal

var itens = {}
var itens2 = {nome: 'Refrigerante',
              preco: 'R$ 2,00',
              ativo: true, detalhes: {detalhe: '....'}}



// Construtor
var pessoa = new Object();
pessoa.nome = 'Marlison';
pessoa.idade = 22;


//Acessar
console.log(itens2.nome);
console.log(itens2.preco);
console.log(itens2['ativo']);

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(itens2.detalhes.detalhe)
