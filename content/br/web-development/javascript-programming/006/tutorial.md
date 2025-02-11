## Funções em JavaScript

## O que são Funções?
Funções são blocos de código reutilizáveis que podemos chamar várias vezes com diferentes valores. Pense nelas como pequenas máquinas que recebem entrada (parâmetros) e produzem uma saída (retorno).

```javascript
// Função simples que soma 5
function addFive(number) {
    return number + 5;
}

console.log(addFive(10));  // 15
console.log(addFive(20));  // 25
console.log(addFive(-5));  // 0
```

## Parâmetros e Retorno
Funções podem receber vários parâmetros e retornar um resultado usando return.

```javascript
function criarSaudacao(nome, periodo) {
    if (periodo === "manhã") {
        return `Bom dia, ${nome}!`;
    } else if (periodo === "tarde") {
        return `Boa tarde, ${nome}!`;
    } else {
        return `Boa noite, ${nome}!`;
    }
}

console.log(criarSaudacao("Ana", "manhã")); // "Bom dia, Ana!"
console.log(criarSaudacao("João", "noite")); // "Boa noite, João!"
```

## Diferentes Formas de Escrever Funções
JavaScript oferece várias sintaxes para criar funções:

```javascript
// 1. Declaração de função tradicional
function somar(a, b) {
    return a + b;
}

// 2. Expressão de função
const multiplicar = function(a, b) {
    return a * b;
};

// 3. Arrow function
const subtrair = (a, b) => {
    return a - b;
};

// Arrow function compacta (retorno implícito)
const dividir = (a, b) => a / b;

console.log(somar(5, 3));      // 8
console.log(multiplicar(4, 2)); // 8
console.log(subtrair(10, 5));  // 5
console.log(dividir(10, 2));   // 5
```

## Funções com Múltiplos Parâmetros
Funções podem receber quantos parâmetros forem necessários:

```javascript
function calcularMedia(...numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma / numeros.length;
}

console.log(calcularMedia(10, 20, 30));     // 20
console.log(calcularMedia(2, 4, 6, 8, 10)); // 6
```

## Funções como Blocos de Construção
Podemos usar funções dentro de outras funções:

```javascript
function calcularImposto(valor) {
    return valor * 0.2; // 20% de imposto
}

function calcularPrecoFinal(preco) {
    const imposto = calcularImposto(preco);
    const precoFinal = preco + imposto;
    return precoFinal;
}

console.log(calcularPrecoFinal(100)); // 120
```

## Dicas Importantes

- Use nomes descritivos para suas funções e parâmetros
- Cada função deve ter uma única responsabilidade
- Evite efeitos colaterais: prefira funções que retornam valores em vez de modificar dados externos
- Tente manter suas funções pequenas e focadas

## Exercícios Práticos
Tente criar funções para:

- Calcular a área de um círculo dado o raio
- Verificar se um número é par ou ímpar
- Formatar um nome (primeira letra maiúscula)
- Calcular o desconto de um produto