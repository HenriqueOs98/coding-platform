## Arrays em JavaScript - Coleções Ordenadas de Dados
Neste tutorial, você aprenderá sobre Arrays em JavaScript, uma estrutura fundamental para trabalhar com coleções ordenadas de dados. Diferente dos objetos, arrays mantêm a ordem dos elementos e oferecem métodos específicos para manipulação de dados sequenciais.

## Fundamentos de Arrays
Arrays são listas ordenadas que podem conter qualquer tipo de dado:

📄 basic-arrays.js

```javascript

  // Criando arrays
  const numeros = [1, 2, 3, 4, 5];
  const frutas = ["maçã", "banana", "laranja"];
  const misto = [42, "texto", true, { chave: "valor" }];
  
  // Acessando elementos
  console.log(numeros[0]);     // 1
  console.log(frutas[1]);      // banana
  console.log(misto[3].chave); // valor
  
  // Propriedade length
  console.log(numeros.length); // 5
  console.log(frutas.length);  // 3
```

## Manipulando Arrays
JavaScript oferece diversos métodos para adicionar, remover e modificar elementos:

📄 array-manipulation.js

```javascript

  const tecnologias = ["JavaScript", "HTML", "CSS"];
  
  // Adicionando elementos
  tecnologias.push("React");           // Adiciona no final
  tecnologias.unshift("TypeScript");   // Adiciona no início
  
  // Removendo elementos
  const ultimo = tecnologias.pop();    // Remove do final
  const primeiro = tecnologias.shift(); // Remove do início
  
  // Modificando elementos
  tecnologias[1] = "Python";           // Substitui elemento
  
  console.log(tecnologias);
  
  // Juntando elementos
  console.log(tecnologias.join(" - ")); // JavaScript - Python - CSS
```

## Iterando sobre Arrays
Existem várias formas de percorrer os elementos de um array:

📄 array-iteration.js

```javascript

  const alunos = [
    { nome: "Ana", nota: 8.5 },
    { nome: "Bruno", nota: 7.8 },
    { nome: "Carla", nota: 9.2 }
  ];
  
  // Usando for tradicional
  for (let i = 0; i < alunos.length; i++) {
    console.log(`${alunos[i].nome}: ${alunos[i].nota}`);
  }
  
  // Usando forEach
  alunos.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
  });
  
  // Usando for...of
  for (const aluno of alunos) {
    console.log(`${aluno.nome}: ${aluno.nota}`);
  }
```

## Desafio Prático
Crie um sistema de gerenciamento de tarefas usando arrays:

- Implemente funções para adicionar, remover e marcar tarefas como concluídas
- Mantenha um registro da data de criação e conclusão
- Adicione funcionalidade para filtrar tarefas por status
- Implemente uma função para listar tarefas ordenadas por data

📄 task-manager.js

```javascript

  const gerenciadorTarefas = {
    tarefas: [],
    
    adicionarTarefa(titulo) {
      this.tarefas.push({
        id: Date.now(),
        titulo,
        concluida: false,
        dataCriacao: new Date(),
        dataConclusao: null
      });
    },
  
    marcarComoConcluida(id) {
      const tarefa = this.tarefas.find(t => t.id === id);
      if (tarefa) {
        tarefa.concluida = true;
        tarefa.dataConclusao = new Date();
      }
    },
  
    removerTarefa(id) {
      this.tarefas = this.tarefas.filter(t => t.id !== id);
    },
  
    listarTarefas(filtro = 'todas') {
      let tarefasFiltradas = this.tarefas;
      
      if (filtro === 'concluidas') {
        tarefasFiltradas = this.tarefas.filter(t => t.concluida);
      } else if (filtro === 'pendentes') {
        tarefasFiltradas = this.tarefas.filter(t => !t.concluida);
      }
  
      return tarefasFiltradas.sort((a, b) => 
        b.dataCriacao.getTime() - a.dataCriacao.getTime()
      );
    }
  };
```

## Dicas e Melhores Práticas

- Prefira métodos de array modernos como map, filter e reduce para transformações de dados
- Use o spread operator (...) para criar cópias de arrays quando necessário
- Mantenha a imutabilidade criando novos arrays em vez de modificar os existentes
- Utilize destructuring para extrair elementos de arrays de forma mais elegante

## Perguntas Frequentes

Qual a diferença entre push() e unshift()?
push() adiciona elementos ao final do array, enquanto unshift() adiciona no início. push() geralmente tem melhor performance por não precisar reindexar os elementos existentes.

Como posso verificar se um valor está em um array?
Use o método includes() para valores primitivos ou find()/some() para busca com critérios mais complexos. Exemplo: array.includes(5) ou array.some(x => x > 10)

Qual a melhor forma de remover elementos de um array?
Depende do caso. splice() remove elementos de qualquer posição, filter() cria um novo array excluindo elementos indesejados, e pop()/shift() removem elementos do final/início respectivamente.

  </article