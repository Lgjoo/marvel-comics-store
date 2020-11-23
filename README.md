# MarvelComicStore

Projeto desenvolvido com Angular CLI 10.0.1.

O projeto tem por objetivo criar uma loja de quadrinhos da MARVEL.

Todo o conteúdo visual aqui apresentado é de propriedade da MARVEL.

## Configuração inicial

Utilize `npm install` para realizar a instalação dos pacotes e configurações do projeto.

Utilize `ng serve` para iniciar um servidor de testes local.

Utilize `ng build` para compilar o projeto.

## Sobre

O projeto foi escrito utilizando Angular 10 como framework do front-end.

Foi utilizado a API da MARVEL(`https://gateway.marvel.com:443/v1/public/`) para obtenção dos dados exibidos na loja.

A aplicação consiste de: 
    
    - Tela principal: lista os quadrinhos disponíveis na loja;

    - Cabeçalho: possui botões de ação e nome da loja;

    - Rodapé: possui informação útil do site;

    - Busca: acessado através do botão de lupa no cabeçalho, abre um menu lateral para realizar pesquisa de títulos dos quadrinhos;

    - Login: acessado através do botão de usuário no cabeçalho, abre um modal para inserção de dados e realização do login;

    - Finalização do pedido: acessado através do botão de carrinho no cabeçalho, abre um menu lateral para realizar a verificação e finalização do pedido;

    - Detalhes da HQ: acessado através do botão de detalhes abaixo de cada HQ, abre um modal que exibe informações sobre a HQ escolhida.

## Aplicação

Foi considerado fazer uma aplicação com um layout clean, para que o usuário se sinta mais confortável na navegação.

Tela principal: Ao acessar a aplicação, realiza uma requisição à API para retornar as HQs iniciais da página. Ao ir descendo o conteúdo da página, são realizadas pesquisas para carregar mais HQs(infinite loading), caso não retorne HQs, é mostrado uma mensagem informando que não foi possível encontrar resultados. Ao iniciar a aplicação, é realizado um sorteio de número(0-9) que especificará qual HQ é rara, se utilizando do último digito do id da HQ.

Busca: O botão de lupa do cabeçalho abre um menu lateral vindo da esquerda, que sobrepõe a lista de HQs, nesse menu é possível digitar o título de uma HQ para realizar uma busca da mesma. Ao executar a busca, o menu se fecha e o resultado será carregado na lista.

Lista de quadrinhos: A lista é composta de itens que exibem: a capa da HQ, o título, marcador de raridade, botão de detalhes e botão de compra. Caso a HQ for rara, será exibido o marcador de raridade. O botão de comprar inicialmente exibe o preço da HQ, mas ao passar o mouse por cima dele, é mostrado o texto 'Comprar', que ao ser clicado, insere a HQ no pedido.

Detalhes da HQ: Exibe os detalhes da HQ, em um modal, além de mostrar o preço e ter um botão para inserir a HQ no pedido.

Login: O botão de login do cabeçalho abre um modal com campos para usuário e senha, que serão armazenados no localstorage para simular um login, caso já esteja logado, irá apresentar uma mensagem e o botão de sair, que excluirá o login do localstorage.

Finalização: O botão de carrinho do cabeçalho, que possui um contador de itens no pedido ao seu lado, abre um menu lateral vindo da direita, que sobrepõe a lista de HQs. Nesse menu é possível verificar as HQs no pedido e modificar a quantidade das HQs, realizando o cálculo do total considerando aquela HQ; inserir cupons de desconto no pedido, que podem variar de raridade(Comum e raro), sendo que comum será válido apenas para as HQs comuns e raro para todas as HQs; totalizador do pedido, que calcula o preço total do pedido considerando os cupons de descontos inseridos; e um botão de checkout.

Cupons: Os cupons são gerados através de um mock, localizado em `assets/mocks/cupons.json`, e ao iniciar a aplicação, é feita uma requisição que carrega os cupons. Ao inserir um cupom é feita uma verificação se o cupom já foi utilizado ou já está inserido no pedido. Os cupons utilizados são inseridos no localstorage para simular a verificação.


