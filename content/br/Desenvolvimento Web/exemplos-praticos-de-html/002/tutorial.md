

**🚀 Mãos à Obra: Construindo a Estrutura de um Artigo de Blog**

Vamos criar a marcação HTML para um post de blog. Começamos com o esqueleto básico:

```html
<html>
  <body></body>
</html>
```

Adicionamos título e subtítulo:

```html
<html>
  <body>
    <h1>Meu Primeiro Post no Blog</h1>
    <h2>Dicas para Iniciantes</h2>
  </body>
</html>
```

Incluímos o conteúdo do post:

```html
<html>
  <body>
    <h1>Meu Primeiro Post no Blog</h1>
    <h2>Dicas para Iniciantes</h2>
    <p>
      Texto de exemplo para preencher conteúdo. Normalmente usamos o "lorem ipsum",
      que é um texto gerado automaticamente. Você pode criar seus próprios textos
      em [DOCS].
    </p>
  </body>
</html>
```

Vamos envolver o conteúdo principal na tag `main`:

```html
<html>
  <body>
    <main>
      <h1>Meu Primeiro Post no Blog</h1>
      <h2>Dicas para Iniciantes</h2>
      <p>
        <!-- Texto continuado -->
      </p>
    </main>
  </body>
</html>
```

![Exemplo de estrutura básica][DOCS]

Agora adicionamos a barra de navegação e rodapé:

```html
<html>
  <body>
    <nav>
      <ol>
        <li><a href="/">Início</a></li>
        <li><a href="/blog">Blog</a></li>
      </ol>
    </nav>
    
    <main>
      <!-- Conteúdo principal -->
    </main>

    <footer>
      <p>© 2024 Blog do Dev</p>
    </footer>
  </body>
</html>
```

Nossa página agora tem 3 seções claras:
- `nav` (navegação)
- `main` (conteúdo principal)
- `footer` (rodapé)

![Visualização das seções][DOCS]

**Por que usar tags semânticas?**  
Você poderia usar apenas `div`s, mas as tags específicas:

1. Melhoram a acessibilidade
2. Facilitam a leitura por ferramentas de busca
3. Deixam o código mais organizado

Exemplo com `div`s (não recomendado):

```html
<html>
  <body>
    <div><!-- Menu --></div>
    <div><!-- Conteúdo --></div>
    <div><!-- Rodapé --></div>
  </body>
</html>
```

![Comparação visual][DOCS]

**Dica profissional:**  
Sempre prefira tags semânticas quando possível. Seu eu futuro (e seus colegas de equipe) vão agradecer!

**Versão final com conteúdo completo:**

```html
<html>
  <body>
    <nav>
      <ol>
        <li><a href="/">Início</a></li>
        <li><a href="/blog">Blog</a></li>
      </ol>
    </nav>
    
    <main>
      <h1>Meu Primeiro Post no Blog</h1>
      <h2>Dicas para Iniciantes</h2>
      
      <div>
        <p>Texto de exemplo parágrafo 1...</p>
        <p>Texto de exemplo parágrafo 2...</p>
        <p>Texto de exemplo parágrafo 3...</p>
      </div>
    </main>

    <footer>
      <p>© 2024 Blog do Dev</p>
    </footer>
  </body>
</html>
```

![Visualização final][DOCS]

Pronto! Agora você tem uma estrutura sólida para começar a estilizar com CSS ou frameworks como Tailwind. Que tal adicionar alguns estilos na próxima etapa? 😉