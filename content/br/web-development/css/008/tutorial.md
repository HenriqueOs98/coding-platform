

**🚀 Domine a Arte da Tipografia no CSS**

Já vimos como colorir elementos e posicioná-los na tela. Mas e as **palavras**? Esse texto que você está lendo agora só fica tão bonito graças ao CSS! Vamos explorar como deixar textos incríveis em suas páginas.

### 🖋️ Escolhendo a Fonte Certa
Tudo começa com a propriedade `font-family`. É assim que definimos qual fonte usar. Uma prática comum é importar fontes personalizadas do Google Fonts. Veja um exemplo:

```html
<link href="[DOCS]" rel="stylesheet">
```

Depois aplicamos no CSS:
```css
body {
  font-family: 'Poppins';
}
```

Dica importante: nem todo usuário tem as mesmas fontes instaladas. Por isso usamos uma "escada de prioridades":
```css
h1 {
  font-family: 'Montserrat', Arial, sans-serif;
}
```
Se a primeira fonte não estiver disponível, o navegador testa as próximas da lista!

### 📏 Controlando os Tamanhos
Para ajustar o tamanho do texto, use `font-size` com unidades flexíveis:
```css
.artigo {
  font-size: 1.2rem; /* Ótimo para responsividade! */
}
```

### ↔️ Espaçamento Entre Linhas
A propriedade `line-height` é super importante para legibilidade:
```css
p {
  line-height: 1.5; /* Espaçamento de 1.5x o tamanho da fonte */
}
```

### 🎯 Alinhamento Perfeito
Alinhe textos facilmente com `text-align`:
```css
.titulo-destaque {
  text-align: center;
}
```

### 🔤 Peso da Fonte
Controle a "espessura" com `font-weight`:
```css
.destaque {
  font-weight: 600; /* Valores de 100 a 900 */
}
```

Lembre-se:
- `400` = normal
- `700` = negrito
- Nem todas as fontes têm todos os pesos

### 📚 Fontes do Sistema
Se quiser usar fontes seguras que todo mundo tem:
```css
.codigo {
  font-family: 'Courier New', monospace;
}
```

Pronto! Com essas dicas, seus textos vão ganhar vida. Que tal experimentar combinações diferentes? Lembre-se: tipografia boa é aquela que ninguém percebe, mas todo mundo lê com prazer 😉