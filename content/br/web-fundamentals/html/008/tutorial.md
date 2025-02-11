

**📊 Dominando Tabelas HTML: Do Básico ao Avançado**

No início da web, tabelas eram essenciais para criar layouts. Hoje, usamos CSS Grid e Flexbox para isso, mas tabelas ainda são insubstituíveis para... bem, exibir dados tabulares!

### Criando a Estrutura Básica

Tudo começa com a tag `<table>`:

```html
<table>
  <!-- Conteúdo virá aqui -->
</table>
```

Dentro dela, trabalhamos com **linhas** (`<tr>`) - as colunas vêm dentro delas:

```html
<table>
  <tr></tr> <!-- Primeira linha -->
  <tr></tr> <!-- Segunda linha -->
</table>
```

### Cabeçalhos que Organizam

Para títulos de coluna, usamos `<th>` na primeira linha:

```html
<table>
  <tr>
    <th>Produto</th>
    <th>Preço</th>
    <th>Estoque</th>
  </tr>
</table>
```

![Exemplo de cabeçalhos][DOCS]

### Preenchendo com Dados

Cada célula de dados usa `<td>`. Veja como fica completo:

```html
<table>
  <tr>
    <th>Produto</th>
    <th>Preço</th>
    <th>Estoque</th>
  </tr>
  <tr>
    <td>Notebook</td>
    <td>R$ 4.200</td>
    <td>15 unidades</td>
  </tr>
</table>
```

Sem estilização, fica simples. Vamos melhorar com CSS:

```css
th, td {
  padding: 12px;
  border: 2px solid #c0c0c0;
  background-color: #f8f9fa;
}
```

![Tabela estilizada][DOCS]

### Mesclando Células

**Colspan** une colunas, **rowspan** une linhas:

```html
<tr>
  <td colspan="2">Promoção Relâmpago!</td>
  <td>72h</td>
</tr>
<tr>
  <td rowspan="2">Eletrônicos</td>
  <td>Smartphones</td>
  <td>25</td>
</tr>
```

![Mesclagem de células][DOCS]

### Títulos Laterais

Quebra de padrão: use `<th>` em outras linhas para títulos laterais:

```html
<tr>
  <th>Categoria</th>
  <td>Informática</td>
  <td>45 itens</td>
</tr>
```

### Organização Profissional

Para tabelas complexas, use tags semânticas:

```html
<table>
  <caption>Relatório Mensal</caption>
  
  <thead>
    <tr>
      <th>Mês</th>
      <th>Vendas</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Janeiro</td>
      <td>R$ 58.400</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>Total</td>
      <td>R$ 178.200</td>
    </tr>
  </tfoot>
</table>
```

![Estrutura organizada][DOCS]

### Dicas Cruciais

1. **Caption é importante**: Sempre use `<caption>` para descrição
2. **Acessibilidade**: Use escopo (`scope="col"` ou `scope="row"`) em `<th>`
3. **Responsividade**: Em mobile, considere rolagem horizontal

```html
<th scope="col">Preço Unitário</th>
```

**Pronto!** Agora você domina tabelas HTML como um profissional. Que tal praticar criando uma tabela de horários ou cardápio? 🚀