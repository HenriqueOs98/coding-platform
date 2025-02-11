

**🚀 Dominando o cabeçalho invisível do seu site**  

Vamos desvendar os principais elementos que vivem na tag `head` do seu HTML. Essa área é como o motor oculto da sua página - não aparece visualmente, mas é super importante!

A tag `head` sempre vem antes do `body` e depois da abertura do `html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Aqui mora a mágica -->
  </head>
  <body>
    <!-- Conteúdo visível -->
  </body>
</html>
```

Ela não recebe atributos nem conteúdo direto - é apenas um container para outras tags essenciais:

### 1. O crachá da página: `<title>`  
Define o título que aparece na aba do navegador e é crucial para SEO:

```html
<title>Portal de Receitas da Vovó</title>
```

### 2. O mágico do JavaScript: `<script>`  
Adiciona interatividade de duas formas:

**Código direto:**  
```html
<script>
alert('Bem-vindo ao nosso portal!')
</script>
```

**Arquivo externo:**  
```html
<script src="/js/efeitos.js"></script>
<!-- Ou de outro servidor -->
<script src="https://cdn.exemplo/plugin.js"></script>
```

### 3. O estilista: `<link>`  
Principalmente para carregar CSS externo (os visuais da página):

```html
<link href="/css/estilos.css" rel="stylesheet" />
```

Também carrega ícones (favicon):  
```html
<link rel="icon" type="image/png" href="/img/icone-site.png" />
```

### 4. O maquiador interno: `<style>`  
Para estilos CSS direto no HTML (útil para ajustes rápidos):

```html
<style>
  body { background: #f0f0f0; }
</style>
```

### 5. Os assistentes secretos: `<meta>`  
Fazem trabalho de bastidores. Principais tipos:

**Descrição para buscadores:**  
```html
<meta name="description" content="Receitas caseiras e dicas culinárias">
```

**Definindo caracteres especiais:**  
```html
<meta charset="UTF-8">
```

**Configurações para redes sociais:**  
```html
<meta property="og:image" content="[DOCS]/card-receitas.jpg">
```

👉 **Dica Pro:** Essas tags são como ingredientes numa receita - cada uma tem sua função específica. Combinadas corretamente, garantem que seu site tenha boa indexação, carregue rápido e funcione perfeitamente!

**[DOCS]/video-cabecalho.mp4**