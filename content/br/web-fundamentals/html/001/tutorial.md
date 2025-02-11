

**# Mão na massa: criando sua primeira página HTML**

No exemplo anterior, aceleramos um pouco para não ficarmos só na teoria. Escrevemos este HTML básico:

```html
<p>Um parágrafo de texto</p>

<ul>
  <li>Item principal</li>
  <li>Item secundário</li>
  <li>Item extra</li>
</ul>
```

Quero que você veja resultados rápidos e pratique logo. Você já tem uma página HTML funcional! 🎉

Mas precisa saber: nosso arquivo *não estava completo* do ponto de vista técnico. Calma, vou explicar!

A versão tecnicamente correta seria:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Área de configurações -->
  </head>
  <body>
    <p>Um parágrafo de texto</p>

    <ul>
      <li>Item principal</li>
      <li>Item secundário</li>
      <li>Item extra</li>
    </ul>
  </body>
</html>
```

As mudanças importantes:

1. `<!DOCTYPE html>` - Avisa ao navegador: "Isso é HTML moderno!"
2. `<html>` - Tag raiz que envolve **todo** o conteúdo
3. `<head>` - Como a "cabeça" da página (configurações ocultas)
4. `<body>` - O "corpo" onde ficam os elementos visíveis

🔍 Entenda melhor:
- `head`: Espaço para metadados, título da página, links para CSS (veremos depois)
- `body`: Tudo que o usuário vê
- Usamos cada tag **uma vez** por página

**Dica de organização**:
```html
<html>
  <head>
    <!-- 2 espaços de recuo -->
    <title>Título</title>
  </head>
  <body>
    <!-- Elementos com hierarquia clara -->
    <div>
      <p>Texto</p>
    </div>
  </body>
</html>
```

Use 2 ou 4 espaços (ou TAB) para indentar. O importante é manter a estrutura visual como uma árvore!

**Curiosidade** 😲: No Codepen do exemplo anterior, funcionou mesmo incompleto porque a plataforma já inclui automaticamente as tags básicas. Se você tentar colocar a estrutura completa lá, receberá um aviso:

[DOCS]

👉 Tradução do aviso: "Não coloque tags html/head/body - o Codepen as adiciona automaticamente"

Agora você já sabe o básico para começar! Que tal experimentar no seu editor de código favorito?