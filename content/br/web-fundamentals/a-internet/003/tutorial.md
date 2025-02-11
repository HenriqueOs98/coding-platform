

**Descobrindo o HTML: A Linguagem que Constrói a Web**

O HTML é como o *bilhete* trocado entre o servidor web e o navegador. É o alicerce principal do desenvolvimento web, a base de tudo.

**HTML** significa "Hyper Text Markup Language", ou seja, é uma **linguagem de marcação**. Não é exatamente uma linguagem de programação, como os puristas gostam de frisar.

Quando criamos um arquivo HTML, escrevemos texto comum, mas salvamos com a extensão `.html`. Esse arquivo contém conteúdo (como parágrafos ou títulos) organizado com *tags* que orientam o navegador sobre como exibir a informação para o usuário.

Vejamos um exemplo prático:

```html
<p>Um parágrafo de exemplo</p>

<ol>
  <li>Maçã</li>
  <li>Banana</li>
  <li>Morango</li>
</ol>
```

Aqui, `Um parágrafo de exemplo` está dentro de uma **tag** `<p>` (parágrafo). Em seguida, uma **lista ordenada** (`<ol>`) com três itens (`<li>`). Cada elemento tem uma **tag de abertura** (ex: `<p>`), o conteúdo e uma **tag de fechamento** (ex: `</p>`).

**Mão na massa!** Vamos usar o [CodePen](https://codepen.io/), uma ferramenta online perfeita para experimentar. Crie uma conta grátis e comece um novo *Pen*. Na área HTML, cole o código acima. Você verá algo assim:

![Exemplo no CodePen]([DOCS])

Repare que o navegador aplica estilos padrão: os itens da lista ganham marcadores, e o parágrafo tem espaçamento próprio. Isso acontece porque o HTML foca no **significado** do conteúdo, não na aparência. Quer mudar cores ou fontes? Aí entra o CSS, mas isso é história para outro dia.

**Dica importante:** O HTML define a estrutura semântica. Por exemplo:
- `<p>` = parágrafo
- `<ol>` = lista ordenada
- `<li>` = item de lista

Nunca use HTML para controlar cores ou layouts complexos. Isso é trabalho do CSS! Para aprofundar, baixe o [Guia de HTML]([DOCS]) que preparei.

**Compartilhe seu código!** No CodePen, você pode gerar um link do seu projeto (ex: [DOCS]) ou até embutir o resultado em outras páginas. Perfeito para colaborar ou pedir ajuda!

👉 **Experimente agora:** [Acesse este Pen]([DOCS]) e clique em "Run" para ver o exemplo ao vivo. Divirta-se alterando as tags e observando as mudanças!

**Próximo passo:** Domine a estrutura básica de uma página HTML e descubra tags essenciais como `<head>`, `<body>` e `<title>`. Mas isso fica para o próximo capítulo! 😉