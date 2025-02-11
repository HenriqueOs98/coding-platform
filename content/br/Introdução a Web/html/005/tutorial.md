

**Dominando Imagens HTML: Seu Guia Visual para a Web** 🌐

No mundo do desenvolvimento web, exibir imagens é essencial. Vamos explorar como fazer isso de forma eficiente usando HTML!

### A Magia da Tag `<img>`

A peça central para inserir imagens é a tag auto-fechante `<img>`. Ela funciona assim:

```html
<img src="foto-gato.jpg" />
```

Aqui, o atributo `src` (source/fonte) indica o caminho da imagem. Importante: essa tag não precisa de fechamento separado!

### Formatos que Você Precisa Conhecer 🖼️

Principais formatos suportados:
- **PNG** (ótimo para transparências)
- **JPEG** (ideal para fotos)
- **SVG** (imagens vetoriais escaláveis)
- **WebP** (formato moderno com alta compactação)

### Acessibilidade Não é Opção!

Sempre inclua o atributo `alt` para:
1. Leitores de tela para deficientes visuais
2. Indexação por mecanismos de busca
3. Exibição alternativa se a imagem não carregar

```html
<img src="gato-siames.jpg" alt="Gato siamês brincando com bola de lã" />
```

### Controlando o Espaço Ocupado 📏

Defina dimensões para melhor performance e layout estável:

```html
<img 
  src="gato-persa.jpg" 
  alt="Gato persa de olhos azuis" 
  width="400" 
  height="300"
/>
```

**Dica profissional:** Esses valores são em pixels e ajudam o navegador a reservar o espaço correto antes do carregamento completo.

### Boas Práticas na Prática 🛠️

1. Otimize imagens para web (use ferramentas de compressão)
2. Para sites responsivos, combine com CSS:
```html
<img src="gato-responsivo.jpg" style="max-width: 100%; height: auto;">
```
3. Use o elemento `<picture>` para diferentes resoluções/dispositivos

Lembre-se: imagens bem implementadas melhoram a experiência do usuário e o desempenho do seu site! 🚀