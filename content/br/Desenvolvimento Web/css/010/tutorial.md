

**Mão na Massa: Transformando um Post de Blog com CSS**

Vamos dar vida ao esqueleto HTML que criamos anteriormente! Começando com esta estrutura básica:

```html
<html>
  <head>
    <link 
      href="[DOCS]" 
      rel="stylesheet"
    />
  </head>
  <body>
    <nav>
      <ol>
        <li><a href="/">Início</a></li>
        <li><a href="/blog">Blog</a></li>
      </ol>
    </nav>
    <main>
      <h1>Meu Primeiro Post Profissional</h1>
      <h2>Dicas para Iniciantes em CSS</h2>
      <div>
        <p>Conteúdo ilustrativo sobre estilização web...</p>
        <p>Segundo parágrafo com exemplos práticos...</p>
      </div>
    </main>
    <footer>
      <p>&copy; 2024 WebMaster</p>
    </footer>
  </body>
</html>
```

![Captura inicial][DOCS]

**Passo 1: Tipografia Personalizada**

Vamos usar fontes modernas do Google Fonts:

```css
body {
  font-family: system-ui; /* Fallback para o sistema */
}

h1, h2 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
}
```

![Resultado das fontes][DOCS]

**Passo 2: Refinando a Navegação**

Primeiro, vamos limpar o estilo padrão da lista:

```css
nav ol {
  list-style: none;   /* Remove marcadores */
  padding-left: 0;    /* Elimina recuo */
}

nav li {
  display: inline-block; /* Itens lado a lado */
  margin-right: 15px;
}

nav a {
  text-decoration: none; /* Remove sublinhado */
  color: #2d3748;
}
```

**Passo 3: Separadores Elegantes**

Adicionamos divisores entre os links:

```css
nav li:not(:last-child)::after {
  content: "|";
  margin-left: 15px;
  color: #cbd5e0;
}
```

![Navegação estilizada][DOCS]

**Passo 4: Layout Principal**

Melhorando a legibilidade do conteúdo:

```css
main {
  max-width: 768px;
  margin: 40px auto;
  padding: 0 20px;
  line-height: 1.6;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 1.8rem;
  color: #4a5568;
}
```

**Passo 5: Rodapé Discreto**

Finalizando com estilo minimalista:

```css
footer {
  text-align: center;
  padding: 2rem;
  color: #718096;
  border-top: 1px solid #e2e8f0;
}
```

![Resultado final][DOCS]

**Dicas Extras:**

1. Use `:hover` para efeitos nos links
2. Experimente espaçamento com `rem` para escalabilidade
3. Adicione media queries para responsividade
4. Use variáveis CSS para cores principais

Pronto! Seu post agora tem cara profissional. Que tal adicionar um gradiente sutil no título ou ícones sociais no rodapé? 🎨