# Carrinho de Compras

Carrinho de compras em que o usuário escolhe um produto da lista, informa a quantidade e vê os itens se acumulando com o valor total atualizado automaticamente. Foi feito como exercício de prática de JavaScript proposto pela [Alura](https://www.alura.com.br).

O `index.html`, o `style.css` e as imagens foram disponibilizados prontos pela Alura. Todo o `app.js` foi programado por mim do zero, e é nele que está a lógica de leitura do formulário, controle das listas, montagem do carrinho e cálculo do total. A proposta do exercício é essa: receber a interface já montada e resolver apenas o comportamento da página.

## Acesse o projeto

A aplicação está publicada em duas plataformas diferentes e pode ser acessada por qualquer um dos links abaixo, já que ambos exibem a mesma versão.

**Vercel:** [carrinho-compras-lake.vercel.app](https://carrinho-compras-lake.vercel.app)

**GitHub Pages:** [erikvks.github.io/carrinho-compras](https://erikvks.github.io/carrinho-compras/)

## Como funciona

A página oferece três produtos em um menu suspenso, cada um com o seu preço no próprio texto da opção. O usuário seleciona um produto, digita a quantidade e clica em "Adicionar". O item aparece na lista do carrinho com a quantidade, o nome e o valor correspondente, e o total é atualizado. Se o mesmo produto for adicionado outra vez, ele não se repete na lista: a quantidade é somada à que já existia e o preço daquela linha é recalculado. O botão "Limpar" esvazia o carrinho e zera o total, devolvendo a tela ao estado inicial.

## Estrutura de arquivos

```
carrinho-compras/
├── index.html
├── style.css
├── js/
│   └── app.js
└── assets/
    ├── carrinho-cinza.svg
    ├── icone-carrinho.svg
    ├── grafismo-azul.svg
    ├── arrow-down.svg
    └── oculos.png
```

## O que foi aprendido no JavaScript

### Arrays paralelos para guardar o estado

O carrinho é representado por três arrays que caminham juntos: um com os nomes dos produtos, outro com as quantidades e outro com os preços. A posição de cada item é a mesma nos três, então o produto da posição zero tem a sua quantidade na posição zero do segundo array e o seu valor na posição zero do terceiro. Essa é uma forma simples de guardar dados relacionados antes de conhecer estruturas mais robustas, como um array de objetos.

### Evitar itens duplicados com includes e indexOf

Antes de inserir um produto, o código verifica com `includes` se ele já está no carrinho. Se já estiver, `indexOf` descobre em que posição ele se encontra e o código soma a nova quantidade à existente, recalculando o preço daquela linha. Se não estiver, os três arrays recebem um novo elemento com `push`. É esse par de métodos que faz o carrinho se comportar como um carrinho de verdade, agrupando itens iguais em vez de empilhar linhas repetidas.

### Desestruturação de arrays

A função `verficarItem` devolve o nome do produto, o valor e a quantidade de uma vez só, dentro de um array, e quem chama recebe tudo com a sintaxe de desestruturação, atribuindo os três valores a variáveis separadas em uma linha. É uma forma elegante de contornar o fato de uma função poder retornar apenas um valor.

### Separação de strings com split

O valor de cada opção do menu suspenso traz o nome e o preço no mesmo texto. Para separá-los, o código usa `split` com o trecho que divide os dois, o que devolve um array com as duas partes. Assim, o preço é extraído direto do HTML, sem precisar de uma tabela de valores dentro do JavaScript.

### Reconstrução da lista a cada alteração

Em vez de tentar descobrir qual linha mudou e editar apenas aquela, a função `listar` limpa todo o conteúdo do carrinho e o remonta do zero, percorrendo os arrays com um `for`. É uma abordagem mais simples de escrever e de entender, e garante que o que está na tela sempre reflita exatamente o que está nas listas.

### Geração de HTML pelo JavaScript

Cada linha do carrinho é criada concatenando uma template string com as tags e classes do layout, aproveitando os estilos que já vinham no CSS. Os valores das listas são inseridos no meio do texto com a sintaxe `${}` e o resultado é escrito na página com `innerHTML`.

### Funções com responsabilidades separadas

O código foi dividido em funções pequenas e com propósitos claros: uma lê e valida o formulário, outra cuida das listas e da montagem do carrinho, outra escreve o total e outra devolve tudo ao estado inicial. A função `adicionar` apenas orquestra essas chamadas, o que deixa o fluxo fácil de acompanhar.

### Validação e saída antecipada

Se a quantidade estiver vazia ou for menor que um, a função `adicionar` encerra imediatamente com `return`, sem alterar o carrinho. Combinado com `isNaN`, isso evita que valores inválidos entrem na conta do total.

### Estado inicial pela própria função de limpeza

A função `limpar` é chamada logo no começo do arquivo, antes de qualquer interação. Com isso, o exemplo fixo que vinha escrito no HTML é apagado assim que a página carrega e as variáveis já começam inicializadas, reaproveitando a mesma função que o botão "Limpar" usa depois.

## Como executar

Não é necessária nenhuma instalação. Basta clonar ou baixar o repositório e abrir o `index.html` no navegador, ou acessar um dos links de publicação acima.

```bash
git clone https://github.com/erikvks/carrinho-compras.git
cd carrinho-compras
```

## Tecnologias

HTML5 e CSS3 fornecidos pela Alura, JavaScript e Google Fonts (Inter e Chakra Petch).

## Créditos

Exercício proposto pela [Alura](https://www.alura.com.br), que disponibilizou o layout, o HTML, o CSS e as imagens. A implementação do JavaScript é minha, feita do zero.
