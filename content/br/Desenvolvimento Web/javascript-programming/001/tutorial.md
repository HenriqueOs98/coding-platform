## Fundamentos de JavaScript: Programando na Padaria
Neste tutorial, você aprenderá os conceitos básicos de JavaScript usando exemplos práticos de uma padaria. Não importa se você já programa em outra linguagem ou está começando agora - vamos construir uma base sólida juntos.

## O que é código?
Código é, antes de tudo, uma forma de comunicação entre pessoas que acontece de uma maneira que o computador também consegue entender. Pense em uma receita de pão: ela precisa ser clara o suficiente para que outro padeiro possa reproduzir o pão mesmo anos depois de você ter escrito a receita.

📄 padaria.js

```javascript
const precoPaoFrances = 0.50;

const quantidadePaesPorFornada = 100;
const vendasDiarias = precoPaoFrances * quantidadePaesPorFornada;
console.log(vendasDiarias);

```

## Variáveis e Declarações
Em JavaScript, usamos variáveis para guardar informações que queremos usar depois. É como etiquetar diferentes ingredientes na padaria para saber exatamente o que cada um é.

📄 estoque.js

```javascript
// Declarando variáveis com nomes descritivos
const precoKgFarinha = 4.50;
const quilosFarinhaPorDia = 25;

const custoFarinhaDiario = precoKgFarinha * quilosFarinhaPorDia;
console.log('Custo diário com farinha:', custoFarinhaDiario);

// Evite nomes pouco descritivos como:
const x = 4.50; // O que é esse 4.50?
const y = 25;   // 25 do quê?
```

## Configurando seu Ambiente
Vamos criar sua primeira página web com JavaScript. Crie dois arquivos em uma pasta:

📄 index.html

```javascript
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Padaria Programe.tech</title>
  </head>
  <body>
    <h1>Calculadora da Padaria</h1>
    <script src="./padaria.js"></script>
  </body>
</html>
```
📄 padaria.js

```javascript
const precoPaoDoce = 1.00;
const quantidadeVendidaPorDia = 50;

const faturamentoDiario = precoPaoDoce * quantidadeVendidaPorDia;
console.log('Faturamento diário com pão doce:', faturamentoDiario);
```

## Entendendo o Console
O console é como uma janela onde podemos ver o que está acontecendo em nosso código. Para acessá-lo:

- Chrome/Edge: Pressione F12 ou clique com botão direito e selecione "Inspecionar"
- Firefox: Pressione F12 ou use o menu "Ferramentas do Desenvolvedor"
- Safari: Ative o menu Desenvolvedor em Preferências > Avançado primeiro

## Boas Práticas de Código

- Use nomes descritivos para variáveis (precoFarinha é melhor que x)
- Mantenha seu código organizado com espaçamento consistente
- Adicione comentários para explicar partes complexas
- Use const para valores que não vão mudar

## Exercícios Práticos
Tente resolver estes desafios:

Desafio 1: Calcule o lucro diário

```javascript
// Declare as variáveis necessárias para:
// - Preço de venda do pão francês
// - Custo de produção por pão
// - Quantidade vendida por dia
// Calcule o lucro diário
```
Desafio 2: Calcule o faturamento semanal

```javascript
// Use as variáveis do exercício anterior
// Considere que a padaria abre 6 dias por semana
// Calcule o faturamento semanal
```

## Perguntas Frequentes

Por que usar const em vez de let ou var?
const garante que o valor da variável não será alterado acidentalmente, tornando seu código mais previsível e seguro.

Preciso colocar ponto e vírgula no final das linhas?
Em JavaScript, o ponto e vírgula é opcional na maioria dos casos, mas é uma boa prática usá-lo para evitar ambiguidades e manter o código consistente.

Como faço para testar se meu código está funcionando?
Use console.log() para verificar os valores das suas variáveis e resultados dos cálculos. É uma ferramenta simples mas muito útil para debugging.