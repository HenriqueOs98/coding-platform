

**# Domine as Imagens no HTML: Guia Prático com Tailwind**

Vamos explorar como trabalhar com imagens de forma profissional! Começando pelo básico, usamos a tag `<img>` para incorporar figuras. O atributo `src` define o caminho da imagem - pode ser um link externo ou arquivo local.

Experimente este código no seu editor:

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Nossos Amigos Peludos</h2>
  <img src="[DOCS]" />
</body>
</html>
```

🔍 **Resultado:** A imagem aparecerá em seu tamanho natural, que pode ser maior que a tela. 

**Problema comum:** Imagens muito grandes distorcem o layout. Solução rápida com Tailwind:

```html
<img 
  src="[DOCS]" 
  class="w-[500px]"
  alt="Gato siamês em descanso"
/>
```

✨ **Dica profissional:** 
- O `width` (ou `w-` no Tailwind) ajusta a largura mantendo a proporção
- Evite definir `height` manualmente para não distorcer a imagem
- Sempre otimize as imagens antes de subir no site usando ferramentas como [DOCS]

**Acessibilidade é crucial!** Adicione sempre:

```html
<img
  src="[DOCS]"
  class="w-[500px] rounded-lg shadow-xl"
  alt="Filhote golden retriever brincando"
  title="Clique para ver mais fotos"
/>
```

📌 **Por que importa:**
- `alt`: Descreve a imagem para leitores de tela e motores de busca
- `title`: Exibe tooltip ao passar o mouse (ótimo para UX)
- Classes do Tailwind (`rounded-lg`, `shadow-xl`) melhoram o visual

**Erro comum:** Usar imagens pesadas (>1MB). Soluções:
1. Redimensione antes de upload
2. Use formatos modernos como WebP
3. Aproveite o `loading="lazy"` para carregamento inteligente:

```html
<img
  src="[DOCS]"
  class="w-full md:w-1/2"
  alt="Paisagem montanhosa"
  loading="lazy"
/>
```

👉 **Teste você mesmo:** 
1. Experimente diferentes combinações de classes Tailwind
2. Remova o `alt` e veja como quebra a acessibilidade
3. Teste o `title` passando o mouse sobre a imagem

Próximo passo: Aprenda a criar galerias responsivas com CSS Grid e Flexbox!