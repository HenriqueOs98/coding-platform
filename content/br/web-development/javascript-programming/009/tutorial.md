## Objetos em JavaScript - Do Básico ao Avançado
Neste tutorial, você aprenderá sobre objetos em JavaScript, uma das estruturas de dados mais importantes da linguagem. Objetos permitem agrupar dados relacionados e criar estruturas complexas de forma organizada.

## Estrutura Básica de Objetos
Um objeto é uma coleção de pares chave-valor, onde cada valor pode ser acessado através de sua chave:

📄 basic-object.js

```javascript

  const usuario = {
    nome: "Ana Silva",
    idade: 28,
    cidade: "São Paulo",
    ativo: true
  };
  
  // Acessando propriedades
  console.log(usuario.nome);      // Ana Silva
  console.log(usuario['idade']);  // 28 (notação alternativa)
  
  // Modificando valores
  usuario.cidade = "Rio de Janeiro";
  console.log(usuario.cidade);    // Rio de Janeiro
```

## Objetos com Métodos
Objetos podem conter funções (chamadas de métodos) que operam nos dados do objeto:

📄 object-methods.js

```javascript

  const calculadora = {
    valor: 0,
    somar(n) {
      this.valor += n;
    },
    subtrair(n) {
      this.valor -= n;
    },
    obterValor() {
      return this.valor;
    }
  };
  
  calculadora.somar(5);
  calculadora.somar(3);
  console.log(calculadora.obterValor());  // 8
  calculadora.subtrair(2);
  console.log(calculadora.obterValor());  // 6
```

## Objetos Aninhados
Objetos podem conter outros objetos, permitindo criar estruturas de dados complexas:

📄 nested-objects.js

```javascript

  const empresa = {
    nome: "Tech Solutions",
    endereco: {
      rua: "Av. Principal",
      numero: 1000,
      cidade: {
        nome: "São Paulo",
        estado: "SP",
        pais: "Brasil"
      }
    },
    funcionarios: [
      {
        nome: "João",
        cargo: "Desenvolvedor"
      },
      {
        nome: "Maria",
        cargo: "Designer"
      }
    ]
  };
  
  // Acessando dados aninhados
  console.log(empresa.endereco.cidade.estado);  // SP
  console.log(empresa.funcionarios[0].nome);    // João
```

## Desafio Prático
Crie um sistema de cadastro de produtos usando objetos:

- Crie uma estrutura para representar produtos com propriedades como nome, preço e categoria
- Implemente métodos para aplicar desconto e aumentar preço
- Adicione um histórico de alterações de preço
- Crie um método para exibir todas as informações do produto

📄 product-challenge.js

```javascript

  const produto = {
    nome: "Notebook",
    preco: 3000,
    categoria: "Eletrônicos",
    historicoPrecos: [],
    
    aplicarDesconto(percentual) {
      const precoAntigo = this.preco;
      this.preco -= (this.preco * percentual / 100);
      this.historicoPrecos.push({
        data: new Date(),
        precoAntigo,
        precoNovo: this.preco,
        tipo: "desconto"
      });
    },
    
    aumentarPreco(percentual) {
      const precoAntigo = this.preco;
      this.preco += (this.preco * percentual / 100);
      this.historicoPrecos.push({
        data: new Date(),
        precoAntigo,
        precoNovo: this.preco,
        tipo: "aumento"
      });
    },
    
    exibirInformacoes() {
      console.log(`
        Produto: ${this.nome}
        Preço atual: R$ ${this.preco}
        Categoria: ${this.categoria}
        Alterações de preço: ${this.historicoPrecos.length}
      `);
    }
  };
```

## Dicas e Melhores Práticas

- Use nomes descritivos para as propriedades que indiquem claramente seu propósito
- Mantenha os objetos organizados agrupando informações relacionadas em subobjetos
- Evite objetos muito profundamente aninhados pois podem dificultar a manutenção
- Use métodos para encapsular lógicas que manipulam os dados do objeto

## Perguntas Frequentes

Qual a diferença entre objeto.propriedade e objeto['propriedade']?
Ambas formas acessam a mesma propriedade. A notação com ponto (.) é mais comum e legível, mas a notação com colchetes permite usar nomes de propriedades com caracteres especiais ou armazenados em variáveis.

Como posso verificar se uma propriedade existe em um objeto?
Você pode usar o operador 'in' (propriedade in objeto) ou o método hasOwnProperty() do objeto. Exemplo: 'nome' in usuario ou usuario.hasOwnProperty('nome')

Como faço para remover uma propriedade de um objeto?
Use o operador delete: delete objeto.propriedade. Note que isso remove completamente a propriedade do objeto.