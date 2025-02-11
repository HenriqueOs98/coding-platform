

**Domine os Seletores CSS: Além do Básico**  

Vamos expandir seu conhecimento sobre seletores CSS! Você já conhece o essencial:

👉 Selecionar **tags específicas**:
```css
article {
  background: azul-claro;
}
```

👉 **Multiplos elementos** na mesma regra:
```css
h1, .destaque {
  font-size: 1.5rem;
}
```

Agora vamos mergulhar em seletores mais poderosos! 🚀

---

### 🏷️ Caçando Classes e IDs  
No HTML, usamos `class` (para grupos) e `id` (para elementos únicos). No CSS:

- **Classe** = `.nome-classe`  
  (Pode repetir na página)
  
```html
<p class="nome-pet">Rex</p>
```

```css
.nome-pet {
  color: laranja;
}
```

- **ID** = `#nome-id`  
  (Único por página!)

```html
<p id="pet-especial">Bobby</p>
```

```css
#pet-especial {
  border: 2px sólido verde;
}
```

---

### 🔗 Combinando Seletores  
Que tal misturar seletores para precisão cirúrgica?

👉 **Multiplas classes** no mesmo elemento:
```html
<div class="caixa destaque">...</div>
```

```css
.caixa.destaque {
  box-shadow: 0 0 10px prata;
}
```

👉 **Classe + ID** juntos:
```html
<span class="tag" id="urgente">!</span>
```

```css
.tag#urgente {
  background: vermelho;
}
```

---

### 🌳 Navegando na Árvore HTML  
Seletores hierárquicos são superpoderosos:

👉 **Elemento dentro de outro** (qualquer nível):
```html
<section>
  <div class="info">
    <p>Texto importante</p>
  </div>
</section>
```

```css
section p {
  font-weight: 600;
}
```

👉 **Filho direto** (apenas primeiro nível):
```css
article > .autor {
  font-style: itálico;
}
```

```html
<article>
  <p class="autor">Funciona!</p>
  <div>
    <p class="autor">Ignorado</p>
  </div>
</article>
```

---

### 👥 Seletores de Parentesco  
Elementos que são "vizinhos" na página:

👉 **Irmão adjacente** (imediatamente depois):
```css
h2 + p {
  margin-top: 0;
}
```

```html
<h2>Título</h2>
<p>Parágrafo estilizado</p>
<p>Parágrafo normal</p>
```

---

### Dica do Expert 💡  
Use esses seletores com moderação! Priorize:  
1. Classes semânticas  
2. Hierarquia clara  
3. Especificidade progressiva  

Nos próximos passos, exploraremos pseudo-classes e atributos. Mas por hoje, pratique esses conceitos! ✨

👉 [DOCS] Para exercícios práticos, confira nossa seção de exemplos interativos.