let total;
let listaQuantidade;
let listaItem;
let listaPreco;
limpar();

function adicionar(){
    let [item,valor,quantidade] = verficarItem();

    if (isNaN(quantidade) || quantidade < 1) return;
    preco = valor * quantidade;
    listar(quantidade,item,valor);
    total = total + preco;
    totalizar(total);
}

function verficarItem(){
    let nomeProduto = document.getElementById('produto').value;
    let [produto, valor] = nomeProduto.split(' - R$');
    let quantidade = parseInt(document.getElementById('quantidade').value);
    document.getElementById('quantidade').value = '';
    return [produto,valor,quantidade];
}

function listar(quantidade,item,valor){
    if(listaItem.includes(item)){
        let posicao = listaItem.indexOf(item);
        listaQuantidade[posicao] = listaQuantidade[posicao] + quantidade;
        listaPreco[posicao] = listaQuantidade[posicao] * valor;
    } else{
        listaQuantidade.push(quantidade);
        listaItem.push(item);
        listaPreco.push(valor * quantidade);
    }
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = '';
    for(let i = 0; i < listaItem.length; i++){
        listaCarrinho.innerHTML = listaCarrinho.innerHTML + 
                                    `<section class="carrinho__produtos__produto">
                                        <span class="texto-azul">${listaQuantidade[i]}x</span> ${listaItem[i]} <span class="texto-azul">R$${listaPreco[i]}</span>
                                    </section>`;
    }
    
}

function totalizar(total){
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML =  `R$ ${total}`;   
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    total = 0;
    listaQuantidade = [];
    listaItem = [];
    listaPreco = [];
    totalizar(total);
}