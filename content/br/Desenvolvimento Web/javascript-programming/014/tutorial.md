## Introdução ao Async/Await no JavaScript

      Trabalhar com código assíncrono pode ser desafiador. Antes do async/await, usávamos callbacks, o que frequentemente resultava no que chamamos de "callback hell" ou "pirâmide da desgraça", com funções aninhadas dentro de funções. Promises melhoraram isso, mas ainda podem ser difíceis de ler. Felizmente, com versões mais recentes do JavaScript, temos o async/await, que torna o código mais legível e fácil de entender.

## Exemplo Prático com Async/Await

        Vamos criar um exemplo prático onde buscamos uma imagem aleatória de um gato utilizando async/await. Veja o HTML necessário:

        📄 HTML para o exemplo:
        
  Mostrar Gato

Agora, o código JavaScript:

        📄 Exemplo de Async/Await:
        
  const CAT_URL = "https://api.thecatapi.com/v1/images/search";
  
  const gatos = document.getElementById("cat-target");
  
  async function adicionarGato() {
    try {
      const resposta = await fetch(CAT_URL); // Faz a requisição
      const dados = await resposta.json(); // Converte a resposta para JSON
      const img = document.createElement("img");
      img.src = dados[0].url; // URL da imagem do gato
      img.alt = "Imagem de um gato fofo";
      gatos.appendChild(img);
    } catch (erro) {
      console.error("Erro ao buscar a imagem do gato:", erro);
    }
  }
  
  document.getElementById("cat-btn").addEventListener("click", adicionarGato);

        Neste exemplo, ao clicar no botão, uma imagem aleatória de um gato será exibida na página. Vamos entender o que está acontecendo:

async: Declara que a função é assíncrona, permitindo o uso de await dentro dela.

await: Pausa a execução da função até que a Promise seja resolvida. Isso torna o código mais linear e fácil de ler.

try/catch: Captura erros que possam ocorrer durante a execução da função assíncrona.

## Como Funciona o Async/Await?

        O await é usado para "esperar" que uma Promise seja resolvida antes de continuar a execução do código. Isso significa que, na linha onde usamos await, a função pausa sua execução até que a Promise retorne um valor. Vamos ver um exemplo simples:

        📄 Exemplo Simples:
        
  async function obterNome() {
    return "Maria";
  }
  
  console.log("Uma Promise:", obterNome());
  
  obterNome().then(function (nome) {
    console.log("O nome real:", nome);
  });

        Apesar de não usarmos await dentro da função obterNome, ela ainda retorna uma Promise porque foi declarada como async. Isso é importante para entender como async e await funcionam.

## Exemplo com Requisição de Dados

        Vamos criar um exemplo onde buscamos uma piada aleatória utilizando uma API pública. Veja o HTML necessário:

        📄 HTML para o exemplo:
        
  Mostrar Piada

Agora, o código JavaScript:

        📄 Exemplo de Requisição com Async/Await:
        
  const JOKE_URL = "https://icanhazdadjoke.com/";
  
  const piadaElemento = document.getElementById("joke-target");
  
  async function mostrarPiada() {
    try {
      const resposta = await fetch(JOKE_URL, {
        headers: { Accept: "application/json" },
      });
      const dados = await resposta.json();
      piadaElemento.textContent = dados.joke; // Exibe a piada no parágrafo
    } catch (erro) {
      console.error("Erro ao buscar a piada:", erro);
      piadaElemento.textContent = "Não foi possível carregar a piada.";
    }
  }
  
  document.getElementById("joke-btn").addEventListener("click", mostrarPiada);

        Neste exemplo, ao clicar no botão, uma piada aleatória será exibida no parágrafo. O uso de async/await torna o código mais legível e fácil de entender.

## Desafio Prático
Agora é sua vez! Complete o desafio abaixo para praticar o que aprendeu:

- Crie um botão que, ao ser clicado, faça uma requisição para uma API pública de fatos sobre números ([Numbers API](http://numbersapi.com/" target="_blank)).
- Exiba o fato retornado em um elemento HTML na página.
- Adicione um tratamento de erro para exibir uma mensagem caso a API não responda.

Critérios de sucesso:

- O fato deve ser exibido em um parágrafo na página.
- O código deve ser funcional e livre de erros.

## Dicas e Melhores Práticas

- Use try/catch para capturar erros e evitar que o aplicativo quebre.
- Valide os dados retornados pela API antes de utilizá-los.
- Evite bloquear a interface do usuário com operações assíncronas demoradas.

## Perguntas Frequentes

O que é async/await?

async/await é uma sintaxe do JavaScript que permite trabalhar com código assíncrono de forma mais legível, pausando a execução de uma função até que uma Promise seja resolvida.

Qual a diferença entre async/await e Promises?

          Promises são a base do async/await. Enquanto Promises utilizam encadeamento com then, async/await permite escrever o código de forma mais linear e legível.

Posso usar await fora de uma função async?

          Não, o await só pode ser usado dentro de funções declaradas como async.