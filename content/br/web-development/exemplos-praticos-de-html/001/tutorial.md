

**Mão na Massa: Criando Sua Primeira Página HTML do Zero**

Vamos começar pelo esqueleto básico de uma página HTML. Toda página começa com a tag `<html>` e termina com `</html>` - essa segunda chamamos de *tag de fechamento*.

Dentro desse par, só podemos colocar duas tags filhas:
```html
<html>
  <head> </head>
  <body></body>
</html>
```

Aqui temos as duas partes principais:
- `head`: Gerencia o que não vemos (metadados, carregamento de CSS/JS)
- `body`: Contém todo conteúdo visível da página

💡 Curiosidade: O `head` é opcional! Podemos simplificar assim:
```html
<html>
  <body></body>
</html>
```

Agora vamos explorar os 6 níveis de títulos:
```html
<body>
  <h1>Título Principal</h1>
  <h2>Subtítulo Importante</h2>
  <h3>Seção Secundária</h3>
  <h4>Subseção</h4>
  <h5>Detalhe Relevante</h5>
  <h6>Informação Específica</h6>
</body>
```

No navegador, veríamos algo assim: [DOCS]

A numeração funciona como hierarquia:
- `h1` = Título da página
- `h2` = Seções principais
- ... e assim por diante

Vamos adicionar um parágrafo:
```html
<body>
  <!-- Títulos anteriores aqui -->
  <p>Este é um parágrafo de exemplo com texto explicativo.</p>
</body>
```

Resultado: [DOCS]

🚨 Alerta de pegadinha:
Se tentar usar `h7`, o navegador ignora o estilo:
```html
<h7>Título Inválido</h7> <!-- Vira texto normal! -->
```

Na próxima aula veremos tags semânticas e como estruturar seu conteúdo de forma significativa. Bora continuar essa jornada? 🚀