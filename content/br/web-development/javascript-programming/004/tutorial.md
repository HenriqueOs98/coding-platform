## Loops em JavaScript

## Por que usar loops?
Loops permitem repetir ações sem precisar escrever o mesmo código várias vezes. Veja a diferença:

```javascript
// Sem loop (repetitivo e trabalhoso)
let contador = 0;
contador = contador + 1;
contador = contador + 1;
contador = contador + 1;
console.log(contador); // 3

// Com loop (mais elegante)
let contador = 0;
while (contador < 3) {
    contador = contador + 1;
}
console.log(contador); // 3
```

## let vs const
Quando nossa variável precisa mudar de valor, usamos let em vez de const:

```javascript
// Isso vai dar erro
const valor = 1;
valor = 2; // Erro! Não podemos reatribuir const

// Isso funciona
let valor = 1;
valor = 2; // OK! let permite reatribuição
```

## While Loop
While executa um bloco de código enquanto uma condição for verdadeira:

```javascript
let contador = 0;

while (contador < 5) {
    console.log(contador); // Exibe: 0, 1, 2, 3, 4
    contador++; // Incrementa o contador
}

// Outro exemplo
let energia = 100;
while (energia > 0) {
    console.log(`Energia restante: ${energia}`);
    energia -= 10;
}
```

## For Loop
For é geralmente usado quando sabemos quantas vezes queremos repetir algo:

```javascript
// Estrutura básica do for
for (let i = 0; i < 5; i++) {
    console.log(i); // Exibe: 0, 1, 2, 3, 4
}

// Exemplo mais prático
for (let hora = 9; hora <= 17; hora++) {
    console.log(`${hora}:00 - Horário comercial`);
}
```

## Atalhos para Incremento/Decremento
JavaScript oferece várias formas de aumentar ou diminuir valores:

```javascript
let numero = 5;

// Todas essas linhas fazem a mesma coisa
numero = numero + 1;
numero += 1;
numero++;
++numero;

// Outros operadores
numero += 5;  // Adiciona 5
numero -= 3;  // Subtrai 3
numero *= 2;  // Multiplica por 2
numero /= 4;  // Divide por 4
```

## Cuidado com Loops Infinitos!
É importante garantir que seu loop tenha uma condição de parada válida:

```javascript
// ❌ Loop Infinito - Não faça isso!
let numero = 1;
while (numero > 0) {
    numero++; // Nunca vai ser menor que 0
}

// ✅ Loop Correto
let numero = 1;
while (numero < 10) {
    numero++;
    console.log(numero);
}
```

## Exemplos Práticos
Alguns casos de uso comuns para loops:

```javascript
// Somando números
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(`Soma de 1 a 100: ${soma}`);

// Contagem regressiva
for (let i = 10; i > 0; i--) {
    console.log(`${i}...`);
}
console.log("🚀 Lançar!");
```