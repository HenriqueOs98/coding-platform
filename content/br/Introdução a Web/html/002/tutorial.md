

**# Dominando as Tags de Texto HTML: Do Básico ao Avançado**

Vamos explorar as principais tags HTML que você vai usar frequentemente dentro do `<body>` de um documento.

---

### **Blocos vs Elementos em Linha: Entendendo a Diferença**

Antes de mergulharmos nas tags, precisamos dividi-las em 2 grupos importantes:

1. **Elementos de Bloco** (`p`, `div`, cabeçalhos, listas)  
   ➔ Ocupam toda a largura disponível  
   ➔ Não permitem elementos ao lado (como divs separadas)

2. **Elementos em Linha**  
   ➔ Convivem lado a lado com outros  
   ➔ Vivem dentro de blocos (mas o contrário não funciona)

---

### **Parágrafos e Spans: A Dupla Dinâmica**

🔵 **`<p>` - O Bloco Básico**  
Cria parágrafos que funcionam como caixas independentes:
```html
<p>Este é um parágrafo completo que ocupa sua própria linha.</p>
```

🟢 **`<span>` - O Estilista em Linha**  
Perfeito para destacar trechos dentro de um texto:
```html
<p>Texto principal <span style="color: blue;">com parte destacada</span> continua aqui.</p>
```

⚠️ Atenção:  
- Não coloque blocos dentro de parágrafos  
- Nem um parágrafo dentro de outro

---

### **Hierarquia de Cabeçalhos: Do Mais ao Menos Importante**

HTML oferece 6 níveis de títulos. Veja como funcionam:

```html
<h1>Título Principal (Só um por página!)</h1>
<h2>Seção Importante</h2>
<h3>Subseção</h3>
<h4>Detalhe</h4>
<h5>Informação Secundária</h5>
<h6>Dado Complementar</h6>
```

[DOCS] *(Imagem mostrando tamanhos decrescentes dos cabeçalhos)*

💡 Dica de SEO:  
Use `h1` para o título principal da página e `h2`/`h3` para organizar o conteúdo.

---

### **Listas: Organizando Informações**

Temos dois tipos principais:

**Lista Não Ordenada (Marcadores)**  
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**Lista Ordenada (Numeração)**  
```html
<ol>
  <li>Primeiro Passo</li>
  <li>Segundo Passo</li>
  <li>Terceiro Passo</li>
</ol>
```

[DOCS] *(Vídeo demonstrando a diferença visual entre os tipos de lista)*

---

### **Boas Práticas na Prática**

1. Use `h1` como título principal único
2. Mantenha a hierarquia lógica de cabeçalhos
3. Para textos longos, prefira `<p>` em vez de múltiplos `<br>`
4. Use `<span>` para pequenos ajustes visuais sem quebrar o fluxo
5. Listas são ótimas para menus e itens relacionados

```html
<!-- Exemplo completo -->
<h1>Receita de Bolo</h1>
<h2>Ingredientes</h2>
<ul>
  <li><span class="destaque">2 xícaras</span> de farinha</li>
  <li>3 ovos</li>
</ul>
<h2>Modo de Preparo</h2>
<ol>
  <li>Misture os ingredientes</li>
  <li>Asse por 40 minutos</li>
</ol>
```

Lembre-se: cada tag tem seu propósito específico. Escolha sempre a que melhor representa o conteúdo, não apenas a aparência! 😉