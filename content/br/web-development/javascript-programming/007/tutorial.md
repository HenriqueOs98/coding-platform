## Escopo em JavaScript

## O que é Escopo?
Escopo define onde uma variável "existe" e pode ser acessada no código. Pense em escopo como um conjunto de regras que determina quais partes do seu código podem ver e usar certas variáveis.

```javascript
// Exemplo Básico de Escopo
function exemploEscopo() {
    const mensagem = "Olá!";
    console.log(mensagem); // Funciona
}

// console.log(mensagem); // Erro! 'mensagem' não existe aqui
```

## Escopo Global vs Local
Variáveis podem ter escopo global (acessíveis em todo lugar) ou local (acessíveis apenas dentro de um bloco específico).

```javascript
// Escopo Global
const globalVar = "Sou global!";

function exemplo() {
    // Escopo Local
    const localVar = "Sou local!";
    
    console.log(globalVar);  // ✅ Funciona
    console.log(localVar);   // ✅ Funciona
}

console.log(globalVar);      // ✅ Funciona
// console.log(localVar);    // ❌ Erro! Fora de escopo
```

## Escopo em Blocos
Blocos de código (definidos por chaves {}) criam seus próprios escopos:

```javascript
let contador = 0;

// Escopo do bloco if
if (true) {
    const mensagem = "Dentro do if";
    contador++;
}
// console.log(mensagem); // ❌ Erro! 'mensagem' só existe dentro do if
console.log(contador);    // ✅ Funciona, contador é global

// Escopo do loop
for (let i = 0; i < 3; i++) {
    const temp = i * 2;
}
// console.log(i);    // ❌ Erro! 'i' só existe dentro do loop
// console.log(temp); // ❌ Erro! 'temp' só existe dentro do loop
```

## Escopo em Funções
Funções criam seu próprio escopo e podem acessar variáveis de escopos externos:

```javascript
const valorGlobal = 10;

function funcaoExterna() {
    const valorExterno = 20;
    
    function funcaoInterna() {
        const valorInterno = 30;
        console.log(valorGlobal);   // ✅ 10
        console.log(valorExterno);  // ✅ 20
        console.log(valorInterno);  // ✅ 30
    }
    
    funcaoInterna();
    // console.log(valorInterno); // ❌ Erro!
}

// console.log(valorExterno); // ❌ Erro!
```

## Exercício: Identificando Escopos

```javascript
let a = 1;
function teste() {
    let b = 2;
    if (true) {
        let c = 3;
        console.log(a); // O que acontece aqui?
        console.log(b); // E aqui?
        console.log(c); // E aqui?
    }
    console.log(c); // E aqui?
}
console.log(b); // E aqui?
```

Respostas:

- console.log(a) - ✅ Funciona (escopo global)
- console.log(b) - ✅ Funciona (escopo da função)
- console.log(c) dentro do if - ✅ Funciona (escopo do bloco if)
- console.log(c) fora do if - ❌ Erro (fora do escopo)
- console.log(b) no escopo global - ❌ Erro (fora do escopo)

## Dicas Importantes

- Variáveis declaradas com const e let têm escopo de bloco
- Use o escopo mais restrito possível para suas variáveis
- Evite variáveis globais quando possível
- Lembre-se que cada { } cria um novo escopo