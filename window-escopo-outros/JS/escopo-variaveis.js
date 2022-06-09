var cliente = 'Pedro';
console.log(window.cliente);
var mensagemVenda = 'Olá, ' + cliente;
console.log(mensagemVenda, '--Global');

function realizarVenda(item, valor) {
    var mensagemVenda = 'Venda realizada com sucesso!';
    console.log('Cliente: ' , mensagemVenda + ' Local');
    console.log('Cliente: ' , cliente);
    console.log('Item: ', item)
    console.log('Valor: ', valor)

    function total() {
        console.log(mensagemVenda + ' ESCOPO Function Interna');
    }
    total();
}

realizarVenda('Arroz', 5.5); 