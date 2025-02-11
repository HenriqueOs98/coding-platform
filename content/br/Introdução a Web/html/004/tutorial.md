

**Dominando os Links HTML: Seu Guia Prático para Navegação Web**

Links são criados usando a tag `<a>`. O destino do link é definido pelo atributo `href` - pense nele como o "endereço de entrega" do seu clique.

Exemplo básico:

```html
<a href="https://siteexemplo.com.br">
  Clique para explorar
</a>
```

O texto entre as tags é o que aparece sublinhado para o usuário. Mas atenção: existem dois tipos de endereços que podemos usar!

**1. URL absoluta (caminho completo)**  
Como um GPS que precisa do endereço completo:

```html
<a href="https://siteexemplo.com.br/contato">
  Fale conosco
</a>
```

**2. URL relativa (caminho local)**  
Como dar direções a partir do ponto atual:

```html
<a href="/promocoes">Ofertas relâmpago</a>
```

🔍 **Dica crucial:** A barra inicial (`/`) faz toda diferença! Vamos comparar:

- Se você está em `https://siteexemplo.com.br/blog/`
- Link `/novidades` ➔ te leva para `https://siteexemplo.com.br/novidades`
- Link `novidades` ➔ te leva para `https://siteexemplo.com.br/blog/novidades`

Links não são só texto! Que tal transformar imagens em portais clicáveis?

```html
<a href="/">
  <img src="[DOCS]/logo.png" alt="Voltar ao início">
</a>
```

[DOCS] ✨

**Pitaco importante:**  
A barra no início do href age como um "reiniciar" do caminho. Sem ela, o navegador entende que você quer continuar a partir da página atual. Escolha com sabedoria!