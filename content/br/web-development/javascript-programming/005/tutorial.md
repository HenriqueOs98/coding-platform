## Exercício: Repetição de Caracteres

## O Problema
Precisamos criar um programa que repita um caractere específico um determinado número de vezes.

**Requisitos:**

- Declarar uma variável para o caractere
- Declarar uma variável para o número de repetições
- Usar um loop para construir a string final
- Exibir o resultado no console

## Solução Passo a Passo

```javascript
// 1. Declarar as variáveis
const character = '🌟';
const timesToRepeat = 5;

// 2. Criar uma string vazia para armazenar o resultado
let result = '';

// 3. Usar um loop para adicionar o caractere
for (let i = 0; i < timesToRepeat; i++) {
    result = result + character;
}

// 4. Exibir o resultado
console.log(result); // Exibe: 🌟🌟🌟🌟🌟
```

## Explicação

- Começamos com uma string vazia (result = '')
- A cada iteração do loop, concatenamos o caractere à string existente
- O loop roda exatamente o número de vezes especificado em timesToRepeat
- No final, temos uma string com o caractere repetido

## Variações

```javascript
// Exemplo com letra
const character = 'a';
const timesToRepeat = 3;
let result = '';
for (let i = 0; i < timesToRepeat; i++) {
    result += character;
}
console.log(result); // Exibe: aaa

// Exemplo com emoji
const character = '🐶';
const timesToRepeat = 4;
let result = '';
for (let i = 0; i < timesToRepeat; i++) {
    result += character;
}
console.log(result); // Exibe: 🐶🐶🐶🐶

// Exemplo com símbolo
const character = '*';
const timesToRepeat = 10;
let result = '';
for (let i = 0; i < timesToRepeat; i++) {
    result += character;
}
console.log(result); // Exibe: **********
```

## Dicas Importantes

- Use let para a variável result pois ela será modificada no loop
- O operador += é um atalho para result = result + character
- O loop deve começar em 0 e ir até timesToRepeat - 1
- Teste com diferentes tipos de caracteres para garantir que funciona

## Teste Você Mesmo
Experimente com diferentes combinações:

- Letras: 'b' repetido 5 vezes
- Números: '1' repetido 8 vezes
- Emojis: '🎈' repetido 3 vezes
- Símbolos: '-' repetido 20 vezes