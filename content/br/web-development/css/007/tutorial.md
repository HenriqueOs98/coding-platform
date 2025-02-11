

**# Dominando Seletores Avançados do CSS**

Já vimos os seletores básicos anteriormente - tags, classes, IDs, combinações e hierarquias. Agora vamos explorar recursos mais poderosos:

- Seletores por atributo
- Pseudo-classes
- Pseudo-elementos

Dica 📘: Você não precisa decorar tudo. Use este material como referência prática!

## 1. Caçando Elementos por Atributos

Podemos selecionar elementos baseados em seus atributos usando colchetes `[]`. 

**Exemplo básico:**  
Todos os parágrafos com ID (independente do valor)
```css
p[id] {
  /* Estilos aplicados */
}
```

**Filtrando por valor exato:**
```css
p[id="meu-id"] {
  /* Só parágrafos com ID específico */
}
```

**Operadores úteis:**
- `*=` → Contém trecho  
  `p[id*="demo"]` → IDs como "demo-1", "teste-demo"
- `^=` → Começa com  
  `a[href^="https"]` → Links seguros
- `$=` → Termina com  
  `img[src$=".png"]` → Imagens PNG
- `i` no final → Ignora maiúsc/minúsc  
  `[class*="btn" i]` → Captura "BTN", "Btn", etc

## 2. Pseudo-classes: Estados Especiais

São palavras-chave que selecionam elementos em **estados específicos**, usando `:`. 

Principais pseudo-classes:

| Classe          | Uso típico                     |
|-----------------|--------------------------------|
| `:hover`        | Elemento sob o mouse           |
| `:focus`        | Campo em foco                  |
| `:nth-child(2)` | Segundo item em uma lista      |
| `:disabled`     | Campos desativados             |
| `:checked`      | Checkboxes marcados            |

**Exemplo prático:**  
Links que mudam de cor após serem visitados
```css
a:link { color: azul; }
a:visited { color: roxo; }
a:hover { text-decoration: underline; }
```

**Seleção inteligente com `nth-child`:**  
Lista zebrada usando fórmulas
```css
/* Linhas ímpares */
tr:nth-child(odd) {
  background: #f8f8f8;
}

/* Primeiros 3 itens */
li:nth-child(-n+3) {
  font-weight: bold;
}
```

## 3. Pseudo-elementos: Estilizando Partes

Usam `::` para modificar partes específicas de elementos:

| Elemento         | Função                          |
|------------------|---------------------------------|
| `::before`       | Conteúdo antes do elemento      |
| `::after`        | Conteúdo após o elemento        |
| `::first-line`   | Primeira linha de texto         |
| `::selection`    | Texto selecionado pelo usuário  |

**Exemplo criativo:**  
Destacando a primeira letra
```css
p::first-letter {
  font-size: 2.5em;
  color: vermelho;
}

/* Adicionando ícone antes de links */
a.externo::before {
  content: url([DOCS]/icone-link.png);
  margin-right: 5px;
}
```

**Importante:**  
`::before` e `::after` exigem a propriedade `content` para aparecerem, mesmo que vazia:
```css
.balao::after {
  content: "";
  /* Estilos do balão... */
}
```

## Dica Final ✨

Experimente combinar essas técnicas para criar efeitos complexos. Por exemplo:

```css
/* Botões com efeito hover moderno */
.botao-destaque:hover::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: dourado;
  animation: brilho 0.3s;
}
```

Pratique esses conceitos e consulte [DOCS] sempre que precisar de referências detalhadas! 🚀