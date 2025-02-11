## Dominando as Funções Nativas do JavaScript
Neste tutorial, você aprenderá sobre as funções nativas mais úteis do JavaScript e como elas podem tornar seu código mais eficiente e elegante. Vamos explorar desde manipulação de strings até operações matemáticas avançadas.

## Manipulação de Strings
O JavaScript oferece uma rica coleção de métodos para trabalhar com texto. Vamos explorar os mais úteis:

📄 string-methods.js

```javascript

  // Transformação de caso
  const texto = "JavaScript é Incrível";
  console.log(texto.toLowerCase());  // javascript é incrível
  console.log(texto.toUpperCase());  // JAVASCRIPT É INCRÍVEL
  
  // Busca e substituição
  const frase = "O gato e o rato";
  console.log(frase.includes('rato'));     // true
  console.log(frase.replace('rato', 'cão')); // O gato e o cão
  
  // Remoção de espaços
  const espacado = "  trim me  ";
  console.log(espacado.trim());  // "trim me"
```

## Operações Matemáticas
O objeto Math fornece métodos poderosos para cálculos matemáticos:

📄 math-operations.js

```javascript

  // Arredondamento
  console.log(Math.round(3.6));    // 4
  console.log(Math.floor(3.6));    // 3
  console.log(Math.ceil(3.2));     // 4
  
  // Valores mínimos e máximos
  console.log(Math.min(5, 2, 9));  // 2
  console.log(Math.max(5, 2, 9));  // 9
  
  // Números aleatórios
  console.log(Math.random());      // número entre 0 e 1
  // Número aleatório entre 1 e 10
  console.log(Math.floor(Math.random() * 10) + 1);
```

## Manipulação de Arrays
Arrays possuem métodos poderosos para transformação e busca de dados:

📄 array-methods.js

```javascript

  const numeros = [1, 2, 3, 4, 5];
  
  // Transformação
  const dobrados = numeros.map(n => n * 2);
  console.log(dobrados);  // [2, 4, 6, 8, 10]
  
  // Filtragem
  const pares = numeros.filter(n => n % 2 === 0);
  console.log(pares);  // [2, 4]
  
  // Redução
  const soma = numeros.reduce((acc, n) => acc + n, 0);
  console.log(soma);  // 15
```

## Desafio Prático
Crie uma função que processe uma lista de produtos:

- Receba um array de objetos com nome e preço dos produtos
- Filtre apenas produtos com preço maior que R$ 50
- Aplique 10% de desconto em todos os preços
- Retorne o valor total da compra

📄 challenge.js

```javascript

  const produtos = [
    { nome: 'Tênis', preco: 120 },
    { nome: 'Camiseta', preco: 40 },
    { nome: 'Calça', preco: 80 }
  ];
  
  function processarCompra(produtos) {
    return produtos
      .filter(p => p.preco > 50)
      .map(p => ({ ...p, preco: p.preco * 0.9 }))
      .reduce((total, p) => total + p.preco, 0);
  }
  
  console.log(processarCompra(produtos));
```

## Dicas e Melhores Práticas

- Sempre verifique se o método que você precisa já existe como função nativa antes de implementar manualmente
- Consulte a documentação MDN para entender todos os parâmetros disponíveis
- Use métodos de array encadeados para operações complexas, mas mantenha a legibilidade
- Prefira métodos imutáveis (que não modificam o array original) para código mais previsível

## Perguntas Frequentes

Por que usar funções nativas em vez de implementar manualmente?
Funções nativas são otimizadas, testadas extensivamente e geralmente mais rápidas que implementações manuais. Além disso, tornam o código mais legível e padronizado.

Como descobrir quais métodos estão disponíveis para cada tipo de dado?
Você pode consultar a documentação MDN ou usar o console do navegador. Digite o valor seguido de ponto (exemplo: "string".} para ver todos os métodos disponíveis.

Os métodos de array modificam o array original?
Alguns métodos como push(), pop(), splice() modificam o array original. Outros como map(), filter(), reduce() criam um novo array. Consulte a documentação para cada método específico.