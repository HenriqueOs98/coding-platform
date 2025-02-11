

**Design que se adapta: Domine layouts responsivos com CSS moderno**  

Criar sites que se ajustam perfeitamente a qualquer tela é essencial hoje. Veja como dominar essa técnica usando CSS puro e Tailwind de forma simples.

## Por que se preocupar?  
Imagine abrir um site no celular e precisar ficar ampliando para ler - péssimo, né? Layouts responsivos resolvem isso, adaptando automaticamente o conteúdo a diferentes dispositivos. Além da melhor experiência para usuários, o Google prioriza sites mobile-friendly nos resultados de busca. Ou seja: é bom para todos!

## 🔧 No CSS tradicional  
Usamos **media queries** - regras que aplicam estilos específicos conforme o tamanho da tela. A ideia é começar pelo mobile e depois ajustar para telas maiores.

**Exemplo prático:**  
```css
/* Estilo padrão (mobile) */
.card {
  width: 100%;
  background: #f0f0f0;
}

/* Aplica em telas maiores que 768px */
@media (min-width: 768px) {
  .card {
    width: 50%;
    background: #e0e0e0;
  }
}

/* Estilos para telas muito grandes (>1200px) */
@media (min-width: 1200px) {
  .card {
    width: 33%;
    background: #d0d0d0;
  }
}
```

Essa abordagem permite:  
1. Estilo base para dispositivos menores  
2. Ajustes progressivos conforme a tela cresce  
3. Layouts otimizados para cada contexto  

## ⚡ Com Tailwind CSS  
No Tailwind, usamos **breakpoints pré-definidos** diretamente nas classes. A lógica é mobile-first: classes sem prefixo valem para todos os tamanhos, classes com prefixo (`md:`, `xl:`) ativam em telas maiores.

**Exemplo de grid adaptável:**  
```html
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
  <div class="bloco">Item 1</div>
  <div class="bloco">Item 2</div>
  <div class="bloco">Item 3</div>
  <div class="bloco">Item 4</div>
</div>
```

- `grid-cols-1`: 1 coluna em mobile  
- `md:grid-cols-2`: 2 colunas a partir de 768px  
- `xl:grid-cols-3`: 3 colunas em telas acima de 1280px  

## 📐 Breakpoints do Tailwind  
| Prefixo | Largura mínima | Uso típico       |
|---------|----------------|------------------|
| `sm`    | 640px          | Celulares grandes|
| `md`    | 768px          | Tablets          |
| `lg`    | 1024px         | Notebooks        |
| `xl`    | 1280px         | Desktops         |
| `2xl`   | 1536px         | Telas grandes    |

**Dica pro:** Você pode combinar breakpoints com qualquer classe do Tailwind! Experimente:

```html
<button class="text-sm bg-azul-claro md:text-base md:bg-azul-escuro lg:hover:scale-105">
  Botão inteligente
</button>
```

Nesse exemplo:  
- Tamanho de texto e cor mudam em tablets  
- Efeito de hover só aparece em notebooks  

## Veja na prática  
[DOCS]

Dominar responsividade é como ter um site camaleão - se adapta a qualquer ambiente. Comece sempre pelo mobile e vá adicionando ajustes para telas maiores. Com essas técnicas, seus layouts ficarão impecáveis em qualquer dispositivo! 🚀