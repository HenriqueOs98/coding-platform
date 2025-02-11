

**# Tabelas HTML: Crie listas organizadas como um profissional**

Vamos criar uma tabela simples com dois cachorros:

```html
<html>
  <body>
    <h2>Lista de Cães</h2>
    <table>
      <tr> <!-- Linha de cabeçalho -->
        <th>Nome</th>
        <th>Idade</th>
      </tr>
      <tr> <!-- Primeiro animal -->
        <td>Rex</td>
        <td>5 anos</td>
      </tr>
      <tr> <!-- Segundo animal -->
        <td>Luna</td>
        <td>3 anos</td>
      </tr>
    </table>
  </body>
</html>
```

O navegador automaticamente organiza numa visualização limpa:

[DOCS]

Mas tabelas podem ir além de texto. Que tal adicionar fotos?

```html
<html>
  <body>
    <h2>Pets com Fotos</h2>
    <table>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Foto</th>
      </tr>
      <tr>
        <td>Thor</td>
        <td>2 anos</td>
        <td>
          <img
            src="[DOCS]"
            width="150"
          />
        </td>
      </tr>
      <tr>
        <td>Mel</td>
        <td>4 anos</td>
        <td>
          <img
            src="[DOCS]"
            width="150"
          />
        </td>
      </tr>
    </table>
  </body>
</html>
```

[DOCS]

E que tal tabelas dentro de tabelas? Perfect para detalhamentos:

```html
<html>
  <body>
    <h2>Controle de Saúde</h2>
    <table>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Histórico Peso</th>
      </tr>
      <tr>
        <td>Bobby</td>
        <td>6 anos</td>
        <td>
          <table> <!-- Tabela aninhada -->
            <tr>
              <th>Data</th>
              <th>Peso</th>
            </tr>
            <tr>
              <td>Jan/2023</td>
              <td>12 kg</td>
            </tr>
            <tr>
              <td>Jun/2024</td>
              <td>14 kg</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>Nina</td>
        <td>5 anos</td>
        <td>
          <table>
            <tr>
              <th>Data</th>
              <th>Peso</th>
            </tr>
            <tr>
              <td>Fev/2023</td>
              <td>10 kg</td>
            </tr>
            <tr>
              <td>Jul/2024</td>
              <td>11 kg</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

[DOCS]

**Dica profissional:** Use `border="1"` na tag `<table>` para ver as linhas durante o desenvolvimento. Remove depois de estilizar com CSS! 😉