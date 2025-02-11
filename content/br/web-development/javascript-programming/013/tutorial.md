## Introdução ao AJAX e Consumo de APIs

      Neste tutorial, você aprenderá o que é uma API, como fazer requisições assíncronas utilizando AJAX e como manipular os dados retornados. Vamos explorar conceitos básicos, exemplos práticos e boas práticas para trabalhar com APIs no JavaScript.

## O que é uma API?

        API (Interface de Programação de Aplicações) é uma forma de comunicação entre sistemas. Pense nela como um "site" que não é feito para humanos, mas sim para máquinas. É um método que permite que um computador solicite informações de outro.

        Nota: O termo API também pode ser usado para descrever como algo é utilizado. Por exemplo, se você criar um objeto "carro" no JavaScript com métodos como acelerar() e frear(), esses métodos seriam a "API" do objeto. Neste tutorial, focaremos em APIs como endpoints que fornecem dados.

        Vamos imaginar um exemplo prático: você está criando uma página de previsão do tempo onde o usuário insere o CEP e recebe a previsão do dia. O fluxo seria assim:

- O usuário acessa sua página e ela é carregada.
- O usuário digita 01001-000 no campo de busca e pressiona Enter.
- Seu aplicativo faz uma requisição para api.exemplo.com/clima?cep=01001-000.
- A API responde com { "temperatura": 28, "unidade": "C" }.
- Seu aplicativo converte a string JSON em um objeto usando JSON.parse.
- Seu aplicativo atualiza a página para exibir: "A temperatura atual é 28ºC".

## Como fazer uma requisição AJAX

        Vamos criar um exemplo prático onde buscamos uma imagem aleatória de um gato utilizando uma API pública. Para isso, usaremos o método fetch, que é nativo do JavaScript e permite fazer requisições HTTP.

        📄 HTML para o exemplo:
        
  Mostrar Gato

Agora, o código JavaScript:

        📄 Exemplo de Requisição AJAX:
        
  const CAT_URL = "https://api.thecatapi.com/v1/images/search";
  
  const gatos = document.getElementById("cat-target");
  
  function adicionarGato() {
    fetch(CAT_URL)
      .then(function (resposta) {
        return resposta.json(); // Converte a resposta para JSON
      })
      .then(function (dados) {
        const img = document.createElement("img");
        img.src = dados[0].url; // URL da imagem do gato
        img.alt = "Imagem de um gato fofo";
        gatos.appendChild(img);
      })
      .catch(function (erro) {
        console.error("Erro ao buscar a imagem do gato:", erro);
      });
  }
  
  document.getElementById("cat-btn").addEventListener("click", adicionarGato);

        Neste exemplo, ao clicar no botão, uma imagem aleatória de um gato será exibida na página. Vamos entender o que está acontecendo:

fetch: Faz a requisição para a URL da API.

then: Processa a resposta da API. No primeiro then, convertemos a resposta para JSON. No segundo, manipulamos os dados retornados.

catch: Captura erros caso algo dê errado durante a requisição.

## Entendendo Query Strings

        Query strings são parâmetros que enviamos na URL para personalizar a requisição. Por exemplo, se quisermos buscar o clima de amanhã para um CEP específico, podemos usar:

        📄 Exemplo de Query String:
        
  https://api.exemplo.com/clima?cep=01001-000&dia=amanha

        Aqui, estamos enviando dois parâmetros: cep e dia. Eles são separados pelo caractere &. A API usará esses parâmetros para retornar os dados solicitados.

## Desafio Prático
Agora é sua vez! Complete o desafio abaixo para pratic