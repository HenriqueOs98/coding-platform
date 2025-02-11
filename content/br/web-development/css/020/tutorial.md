

**# Dominando Layouts com CSS Grid: Um Guia Prático**

Vamos explorar o poder do CSS Grid criando um layout simples. Começaremos com [este código base] onde temos uma `div` com 4 parágrafos que inicialmente aparecem assim:

[Imagem: 4 blocos empilhados verticalmente]

Por serem elementos **block**, cada `<p>` ocupa toda a linha. Vamos estilizar:

```css
p {
  border: 2px solid #333;
  padding: 25px;
  margin: 0;
  text-align: center;
  background-color: coral;
}
```

[Imagem: Blocos com borda, fundo laranja e texto centralizado]

Agora a mágica do Grid! Vamos transformar a div container:

```css
div {
  display: grid;
}
```

[Imagem: Elementos ainda em uma coluna]

Por padrão, o Grid cria uma coluna única. Vamos adicionar duas colunas:

```css
grid-template-columns: 150px 300px;
```

[Imagem: Layout em 2 colunas com larguras diferentes]

Que tal usar medidas flexíveis? Experimente frações (fr):

```css
grid-template-columns: 1fr 3fr;
```

Isso divide o espaço em 4 partes (1+3), criando colunas responsivas!

Para trabalhar com linhas, definimos uma altura fixa:

```css
div {
  height: 500px;
  grid-template-rows: 1fr 2fr;
}
```

[Imagem: Grid com 2 linhas de alturas diferentes]

Finalizando com espaçamento entre elementos:

```css
gap: 30px;
```

[Imagem: Layout final com espaços uniformes]

**Dica Pro:** A propriedade `gap` substituiu `grid-gap`, mas ambas funcionam. Use a nova sintaxe para melhor compatibilidade!

[Link para o código final] 

Este é só o começo! Com CSS Grid, você pode criar layouts complexos de forma intuitiva. Que tal experimentar diferentes combinações de fr e px?