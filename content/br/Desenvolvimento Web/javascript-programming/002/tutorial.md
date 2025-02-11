## Fundamentos de JavaScript

## Introdução ao JavaScript
JavaScript é uma linguagem de programação que nos permite criar interações dinâmicas em websites. O código que escrevemos é, antes de tudo, uma forma de comunicação entre programadores que o computador também consegue entender.

```javascript
// Este é um comentário - computador ignora, mas ajuda outros programadores
const numeroDeUsuarios = 100;
const pontosPorUsuario = 50;
const pontosTotais = numeroDeUsuarios * pontosPorUsuario;

console.log(pontosTotais); // Exibe: 5000
```

## Variáveis e Tipos de Dados
Variáveis são como caixas onde podemos guardar informações para usar depois. Em JavaScript moderno, usamos principalmente const e let para declarar variáveis.

```javascript
// Números
const idade = 25;
const altura = 1.75;

// Texto (strings)
const nome = "Maria";
const mensagem = 'Olá, mundo!';

// Booleanos (verdadeiro/falso)
const estaLogado = true;
const temPermissao = false;

// Arrays (listas)
const cores = ['vermelho', 'verde', 'azul'];
const numeros = [1, 2, 3, 4, 5];

// Objetos
const usuario = {
    nome: 'João',
    idade: 30,
    email: 'joao@email.com'
};
```

## Operações Básicas
JavaScript permite realizar diversos tipos de operações com esses dados:

```javascript
// Operações matemáticas
const soma = 10 + 5;        // 15
const subtracao = 10 - 5;   // 5
const multiplicacao = 10 * 5;// 50
const divisao = 10 / 5;     // 2

// Operações com strings
const primeiroNome = "João";
const sobrenome = "Silva";
const nomeCompleto = primeiroNome + " " + sobrenome;

// Operações com arrays
const frutas = ['maçã', 'banana'];
frutas.push('laranja');     // Adiciona ao final
const primeiraFruta = frutas[0]; // Acessa primeiro item
```

## Estruturas de Controle
Usamos estruturas de controle para tomar decisões no código:

```javascript
// Condicionais (if/else)
const temperatura = 30;

if (temperatura > 35) {
    console.log("Está muito quente!");
} else if (temperatura > 25) {
    console.log("Está agradável!");
} else {
    console.log("Está frio!");
}

// Loops (for)
for (let i = 0; i < 5; i++) {
    console.log(`Número ${i}`);
}

// Loops (while)
let contador = 0;
while (contador < 3) {
    console.log(`Contagem: ${contador}`);
    contador++;
}
```

## Funções
Funções são blocos de código reutilizáveis que podemos chamar quando precisarmos:

```javascript
// Função simples
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Função com múltiplos parâmetros
function calcularMedia(nota1, nota2, nota3) {
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
    return media;
}

// Uso das funções
console.log(saudacao("Ana")); // Exibe: Olá, Ana!
console.log(calcularMedia(7, 8, 9)); // Exibe: 8
```