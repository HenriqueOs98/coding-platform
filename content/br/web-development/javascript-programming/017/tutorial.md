## Criação do Jogo "Mestre das Palavras" (Wordle)

      Neste tutorial, vamos recriar o famoso jogo de palavras Wordle, que chamaremos de "Mestre das Palavras". O objetivo é adivinhar uma palavra secreta de cinco letras em até seis tentativas. Vamos usar HTML, CSS e JavaScript para construir o jogo, além de consumir APIs para obter a palavra do dia e validar as palavras digitadas.

## Regras do Jogo
Se você não conhece o Wordle, aqui estão as regras básicas:

- Uma palavra secreta de cinco letras é escolhida.
- Os jogadores têm seis tentativas para adivinhar a palavra.
- Se o jogador adivinhar uma letra na posição correta, ela será destacada em verde.
- Se o jogador adivinhar uma letra que está na palavra, mas na posição errada, ela será destacada em amarelo.
- Se a letra não estiver na palavra, ela será destacada em cinza.
- O jogo termina quando o jogador adivinha a palavra ou esgota as seis tentativas.

## APIs Disponíveis
Vamos usar duas APIs para o jogo:

**GET https://words.dev-apis.com/word-of-the-day**: Retorna a palavra do dia. A resposta será algo como {"word":"humph","puzzleNumber":3}.
          
- Adicione ?random=1 para obter uma palavra aleatória.
- Adicione ?puzzle=<número> para obter uma palavra específica.

**POST https://words.dev-apis.com/validate-word**: Valida se uma palavra é válida. Envie um JSON no formato {"word":"crane"}. A resposta será algo como {"word":"crane","validWord":true}.

## Passo a Passo para Criar o Jogo
Vamos dividir o desenvolvimento do jogo em etapas:

- Crie o HTML básico com os elementos necessários.
- Estilize o jogo com CSS para que ele fique visualmente agradável.
Implemente a lógica de entrada de texto no JavaScript:

- Permitir apenas letras.
- Ignorar entradas inválidas (como números ou espaços).
- Tratar a tecla "Enter" para enviar a palavra.
- Tratar a tecla "Backspace" para apagar letras.

- Faça a requisição à API para obter a palavra do dia.
- Implemente a lógica para verificar se a palavra digitada é a correta.
- Adicione feedback visual para letras corretas (verde), incorretas (cinza) e parcialmente corretas (amarelo).
- Adicione condições de vitória e derrota.
- Valide as palavras digitadas usando a API de validação.
- Adicione animações e melhorias visuais (opcional).

## Exemplo de Código
Veja abaixo um exemplo básico de como começar o jogo:

        📄 HTML:

  Enviar

        📄 JavaScript:
        
  const WORD_URL = "https://words.dev-apis.com/word-of-the-day?random=1";
  const VALIDATE_URL = "https://words.dev-apis.com/validate-word";
  
  let secretWord = "";
  
  // Obtém a palavra secreta
  async function getWord() {
    const response = await fetch(WORD_URL);
    const data = await response.json();
    secretWord = data.word.toUpperCase();
    console.log("Palavra secreta:", secretWord);
  }
  
  // Valida uma palavra
  async function validateWord(word) {
    const response = await fetch(VALIDATE_URL, {
      method: "POST",
      body: JSON.stringify({ word }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data.validWord;
  }
  
  // Inicializa o jogo
  getWord();
  
  document.getElementById("submit-word").addEventListener("click", async () => {
    const inputs = document.querySelectorAll(".row .letter");
    const guess = Array.from(inputs).map((input) => input.value).join("").toUpperCase();
  
    if (guess.length !== 5) {
      alert("A palavra deve ter 5 letras!");
      return;
    }
  
    const isValid = await validateWord(guess);
    if (!isValid) {
      alert("Palavra inválida!");
      return;
    }
  
    if (guess === secretWord) {
      alert("Parabéns! Você acertou!");
    } else {
      alert("Tente novamente!");
    }
  });

## Desafio Prático
Agora é sua vez! Complete o jogo adicionando as seguintes funcionalidades:

- Adicione feedback visual para letras corretas (verde), incorretas (cinza) e parcialmente corretas (amarelo).
- Implemente a lógica para limitar o número de tentativas a seis.
- Adicione uma mensagem de vitória ou derrota ao final do jogo.
- Adicione animações para tornar o jogo mais divertido.

## Dicas e Melhores Práticas

- Use a função isLetter para validar entradas de teclado.
- Teste o jogo frequentemente para garantir que tudo está funcionando como esperado.
- Divida o código em funções menores para facilitar a manutenção.

## Perguntas Frequentes

Como validar se uma palavra é válida?

          Use a API POST https://words.dev-apis.com/validate-word para verificar se a palavra digitada é válida. Envie um JSON com a palavra e verifique a resposta.

Como lidar com erros nas requisições?

          Use try/catch para capturar erros e exibir mensagens amigáveis ao usuário.

Como destacar letras corretas e incorretas?

          Use classes CSS para aplicar cores diferentes aos elementos de acordo com o status da letra (verde, amarelo ou cinza).