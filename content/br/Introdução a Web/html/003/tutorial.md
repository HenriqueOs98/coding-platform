

**🚀 Dominando os Atributos HTML: Seu Guia Prático**

Vamos descomplicar os atributos HTML! Esses "ingredientes especiais" que colocamos dentro das tags servem para personalizar elementos. Funcionam como configurações extras que modificam comportamento ou aparência.

**Sintaxe Básica:**
```html
<p class="texto-destaque">Parágrafo personalizado</p>
```
A estrutura é sempre `chave="valor"` - como um par de informação. 

💡 Fica a dica: prefira aspas duplas por convenção, mas saiba que aspas simples também funcionam!

**Multiplicando Atributos:**
```html
<article class="post-blog" id="topo">
  Conteúdo do artigo
</article>
```

**Atributos Booleanos:**
São interruptores - só precisam da chave para ativar. Exemplo clássico no JavaScript:
```html
<script defer src="carregamento-diferido.js"></script>
```
Aqui `defer` já basta para habilitar o carregamento assíncrono.

**Dupla Dinâmica: Class vs ID**

_Dois atributos superpoderosos que você vai usar muito:_

|           | `class`                  | `id`               |
|-----------|--------------------------|--------------------|
| **Uso**   | Multi-reuso              | Identificador único |
| **Multi** | Várias classes (separar com espaço) | Único valor |

**Exemplo Prático:**
```html
<div class="card principal" id="oferta-especial">
  Conteúdo promocional
</div>
```
👉 `class`: Pode repetir em vários elementos  
👉 `id`: Deve ser exclusivo na página

**Convenção de Nomeclatura:**
- Usamos hífen para múltiplas palavras: `texto-grande`
- Evite espaços e caracteres especiais
- Sempre em minúsculas por boa prática

[DOCS]

**Na Prática:**  
Enquanto `id` e `class` são universais, alguns atributos são específicos de tags. Por exemplo, `href` em links e `src` em imagens têm funções exclusivas.