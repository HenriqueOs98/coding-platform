

**🔥 Dando Vida às Páginas Web: A Magia das Fontes**

Vamos começar com esta estrutura básica:

```html
<html>
  <body>
    <h1>Título Principal</h1>
    <h2>Subtítulo Importante</h2>
    <h3>Cabeçalho Médio</h3>
    <h4>Título Secundário</h4>
    <h5>Informação Destaque</h5>
    <h6>Texto Pequeno</h6>

    <p>Um parágrafo comum de texto explicativo.</p>
  </body>
</html>
```

[DOCS]

**Primeiro passo: Personalizando fontes**

Para mudar a aparência do texto, vamos trabalhar com a propriedade `font-family`. Podemos começar alterando apenas um elemento:

```css
h1 {
  font-family: system-ui;
}
```

[DOCS]

Aqui, `system-ui` usa a fonte padrão do sistema operacional do usuário. Mas se quisermos mudar toda a página, aplicamos no `body`:

```css
body {
  font-family: system-ui;
}
```

[DOCS]

**Fontes personalizadas com Google Fonts**

Vamos elevar o nível importando fontes exclusivas. Exemplo com Roboto e Montserrat:

```html
<html>
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,500,700|Montserrat:600,600i"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- Conteúdo mantido -->
  </body>
</html>
```

Agora aplicamos as novas fontes:

```css
body {
  font-family: system-ui; /* Fallback seguro */
}

h2, h3 {
  font-family: 'Montserrat'; /* Font estilizada */
}

h1 {
  font-family: 'Roboto'; /* Título impactante */
  font-weight: 700; /* Negrito intenso */
}
```

[DOCS]

**Dicas importantes:**
- Sempre inclua um fallback (como `system-ui`) caso a fonte externa falhe
- Use `font-weight` para controlar a espessura (valores comuns: 400 normal, 700 negrito)
- Combine fontes diferentes para títulos e texto corrido

Pronto! Agora você já domina os primeiros passos para criar identidades visuais únicas em suas páginas web. Que tal experimentar combinações diferentes? 🎨