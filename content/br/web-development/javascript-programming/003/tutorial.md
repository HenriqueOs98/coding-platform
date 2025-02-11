## Estruturas de Controle em JavaScript: if/else

## Tomando Decisões no Código
Em programação, frequentemente precisamos executar diferentes blocos de código baseado em condições. Para isso, usamos estruturas de controle como if/else.

```javascript
const temperatura = 30;

if (temperatura > 30) {
    console.log("Está muito quente!");
} else {
    console.log("A temperatura está agradável.");
}
```

## Operador de Igualdade (===)
Em JavaScript, usamos === para comparar se dois valores são iguais. É diferente do = que usamos para atribuição.

```javascript
// = é para atribuição
const minhaIdade = 25;

// === é para comparação
if (minhaIdade === 25) {
    console.log("Você tem 25 anos!");
}

// Comparando diferentes tipos
console.log(2 === "2");    // false - tipos diferentes
console.log(2 === 2);      // true - mesmo tipo e valor
console.log("2" === "2");  // true - mesmo tipo e valor
```

## Múltiplas Condições com else if
Quando precisamos verificar múltiplas condições, podemos usar else if:

```javascript
const pontuacao = 85;

if (pontuacao >= 90) {
    console.log("Nota A");
} else if (pontuacao >= 80) {
    console.log("Nota B");
} else if (pontuacao >= 70) {
    console.log("Nota C");
} else {
    console.log("Precisa melhorar");
}
```

## Operadores de Comparação
JavaScript oferece vários operadores para fazer comparações:

```javascript
const numero = 10;

// Igual a (===)
console.log(numero === 10);  // true

// Diferente de (!==)
console.log(numero !== 5);   // true

// Maior que (>)
console.log(numero > 5);     // true

// Menor que (<)
console.log(numero < 20);    // true

// Maior ou igual a (>=)
console.log(numero >= 10);   // true

// Menor ou igual a (<=)
console.log(numero <= 10);   // true
```

## Exemplo Prático
Vamos ver um exemplo mais complexo que usa várias condições:

```javascript
const idade = 16;
const temPermissao = true;

if (idade >= 18) {
    console.log("Pode entrar na festa!");
} else if (idade >= 16 && temPermissao) {
    console.log("Pode entrar com autorização!");
} else {
    console.log("Não pode entrar na festa.");
}

// Testando diferentes valores
const valor1 = 100;
const valor2 = "100";

console.log(valor1 == valor2);   // true (compara apenas valor)
console.log(valor1 === valor2);  // false (compara valor e tipo)
```