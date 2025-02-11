

**Domine o ABC do CSS: Deixe seu site incrível!**

Até agora trabalhamos só com HTML. Mas ele tem um limite - não dá pra deixar a página **bonita** só com tags. Aí entra o CSS!

CSS (Folhas de Estilo em Cascata) é o linguajar que seu navegador entende para aplicar estilos. Vamos ver uma regrinha básica:

```css
h1 {
  color: azul-celeste;
}
```

Essa mágica faz todos os títulos `<h1>` ficarem azuis вместо do preto padrão. 

Cada regra CSS tem duas partes principais:
1. **Seletor** - Quem vai ser estilizado (`h1` no exemplo)
2. **Bloco de declarações** - O que vai mudar (entre chaves `{}`)

Dentro do bloco, usamos **propriedades** e **valores**. No nosso caso, `color: azul-celeste;` significa:
- `color`: propriedade de cor do texto
- `azul-celeste`: valor hexadecimal ou nome de cor

**Como usar na prática?** Três opções:

1. Dentro do HTML (ideal para testes):
```html
<head>
  <style>
    h1 {
      font-family: 'Arial Negrito';
    }
  </style>
</head>
```

2. Arquivo externo (melhor para projetos):
```html
<link href="estilos.css" rel="stylesheet">
```

3. Estilo direto no elemento (emergências):
```html
<h1 style="border: 2px riscado verde-limao">Título VIP</h1>
```

**Dicas ouro:**
- Use vários seletores de uma vez:
```css
h1, .destaque, #logo {
  text-shadow: 2px 2px neve;
}
```

- Espaçamento não importa, mas organização SIM:
```css
/* Ruim 👎 */
h1{color:rosa;background:preto}

/* Bom 👍 */
h1 {
  color: rosa-pastel;
  background: preto-fosco;
  padding: 1rem;
}
```

⚠️ Cuidado com o **ponto e vírgula**! Esquecer pode bagunçar tudo:
```css
/* Errado ❌ */
h1 {
  color: vermelho
  font-size: 20px
}

/* Certo ✅ */
h1 {
  color: vermelho-tijolo;
  font-size: 20px;
}
```

CSS é um universo - dá pra passar anos dominando todas técnicas. Comece pelo básico e evolua gradualmente. Quer um guia completo? Baixe o [DOCS]!

[Vídeo explicativo disponível em [DOCS]]