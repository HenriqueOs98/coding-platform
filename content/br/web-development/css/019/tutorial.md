

**🎯 Domine o Layout Web com CSS Grid**  

Se você quer criar layouts profissionais, precisa conhecer as duas ferramentas poderosas do CSS: **Grid** e **Flexbox**. Vamos focar no Grid, que trabalha em **duas dimensões** (linhas E colunas), perfeito para estruturas complexas!

---

### 🔧 Ativando o Grid  
Basta definir `display: grid` no elemento container (uma `div`, por exemplo). Depois, controle colunas e linhas com:

```css
.container {
  display: grid;
  grid-template-columns: 250px 250px; /* 2 colunas de 250px */
  grid-template-rows: 150px 150px;    /* 2 linhas de 150px */
}
```

Exemplo com HTML:
```html
<section class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</section>
```

Resultado:  
[DOCS]

---

### 🧩 Grids Dinâmicos  
Você pode misturar unidades e criar layouts únicos:
```css
.container {
  grid-template-columns: 120px 1fr; /* 1ª coluna fixa, 2ª flexível */
  grid-template-rows: 80px 200px;
  gap: 15px; /* Espaço entre células */
}
```
- `fr` (fração): divide o espaço restante  
- `gap`: substitui `column-gap` e `row-gap`  

Exemplo visual:  
[DOCS]

---

### 🚀 Expandindo Células  
Para um item ocupar múltiplas células:
```css
.item-destaque {
  grid-column: 2 / 4;    /* Começa na coluna 2 e vai até a 4 */
  grid-row: 1 / span 2; /* Ocupa 2 linhas a partir da 1ª */
}
```
**Dica:** As linhas invisíveis são numeradas de 1 em diante. Visualize:  
[DOCS]

---

### 🌐 Layouts Responsivos  
Use unidades flexíveis para adaptação automática:
```css
.container {
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  grid-auto-rows: minmax(100px, auto);   /* Altura mínima de 100px */
}
```
- `repeat()`: repete padrões  
- `minmax()`: define tamanho mínimo e máximo  

---

### 🛠️ Exemplo Prático  
Criando uma galeria de fotos:
```html
<div class="galeria">
  <img src="foto1.jpg" class="destaque">
  <img src="foto2.jpg">
  <img src="foto3.jpg">
  <img src="foto4.jpg">
</div>
```

```css
.galeria {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 10px;
}

.destaque {
  grid-row: 1 / 3; /* Ocupa duas linhas */
  grid-column: 1;  /* Primeira coluna */
}
```

Resultado:  
[DOCS]

---

### 💡 Dica Final  
Comece com estruturas simples e experimente no navegador! O Grid é intuitivo quando você pratica. Que tal criar um painel de administração ou um portfólio?