let total = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';

function adicionar(){
    let [item, valor,quantidade] = verficarItem();

    if (isNaN(quantidade)) return;
    preco = valor * quantidade;
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + 
                                `<section class="carrinho__produtos__produto">
                                    <span class="texto-azul">${quantidade}x</span> ${item} <span class="texto-azul">R$${preco}</span>
                                </section>`;
    total = total + preco;
    totalizar(total);
}

function verficarItem(){
    let nomeProduto = document.getElementById('produto').value;
    let [produto, valor] = nomeProduto.split(' - ');
    valor = valor.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    return [produto,valor,quantidade];
}

function totalizar(total){
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML =  `R$ ${total}`;   
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    total = 0;
    totalizar(total);
}