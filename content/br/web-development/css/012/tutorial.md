

**# Transformando Tabelas em Obras de Arte com CSS**

Vamos partir deste código HTML básico:

```html
<html>
  <body>
    <h2>Lista de Carros</h2>
    <table>
      <tr>
        <th>Modelo</th>
        <th>Ano</th>
      </tr>
      <tr>
        <td>Fusca</td>
        <td>1979</td>
      </tr>
      <tr>
        <td>Brasília</td>
        <td>1982</td>
      </tr>
    </table>
  </body>
</html>
```

Por padrão, nossa tabela parece uma planilha sem graça:

[DOCS]

Quanto mais dados adicionamos, mais confusa fica. Vamos dar um trato visual usando CSS!

**Passo 1: Estruturando as Bordas**  
Começamos criando uma moldura para a tabela inteira:

```css
table {
  border: 1px solid #ccc; /* Moldura cinza clara */
}
```

[DOCS]

**Passo 2: Bordas Internas**  
Agora adicionamos divisões entre as células:

```css
table,
td {
  border: 1px solid #ccc; /* Mesma cor para todas as bordas */
}
```

Olha só o problema que aparece: as bordas ficam duplicadas! 

[DOCS]

**Passo 3: Unindo as Bordas**  
A magia do CSS resolve com uma propriedade especial:

```css
table {
  border-collapse: collapse; /* Une as bordas duplicadas */
}
```

[DOCS]

**Passo 4: Espaçamento Elegante**  
Vamos dar um respiro aos elementos internos:

```css
td,
th {
  padding: 12px 24px; /* 12px top/bottom, 24px left/right */
  text-align: left; /* Alinhamento à esquerda padrão */
}
```

[DOCS]

**Dica Pro:** O segredo está no equilíbrio entre espaçamento (padding) e alinhamento. Use valores proporcionais para criar hierarquia visual.