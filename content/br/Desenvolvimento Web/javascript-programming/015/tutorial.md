## Eventos em JavaScript - Do Básico ao Avançado
Neste tutorial, você aprenderá como trabalhar com eventos em JavaScript, desde os conceitos básicos até técnicas avançadas como delegação de eventos. Eventos são fundamentais para criar interatividade em suas aplicações web.

## Conceitos Básicos de Eventos
Eventos são ações que acontecem na página web, como cliques, digitação ou carregamento da página:

📄 eventos-basicos.js

```javascript

  // Estrutura básica de um evento
  elemento.addEventListener('nomeDoEvento', function(event) {
    // Código a ser executado quando o evento ocorrer
  });
  
  // Exemplo prático com botão
  const botao = document.querySelector('.meu-botao');
  botao.addEventListener('click', function() {
    console.log('Botão foi clicado!');
  });
```

## Tipos Comuns de Eventos
JavaScript oferece diversos tipos de eventos para diferentes interações:

📄 tipos-eventos.js

```javascript

  // Eventos de Mouse
  elemento.addEventListener('click', () => {});    // Clique
  elemento.addEventListener('dblclick', () => {}); // Clique duplo
  elemento.addEventListener('mouseover', () => {}); // Mouse por cima
  elemento.addEventListener('mouseout', () => {});  // Mouse saiu
  
  // Eventos de Teclado
  elemento.addEventListener('keydown', () => {});  // Tecla pressionada
  elemento.addEventListener('keyup', () => {});    // Tecla solta
  elemento.addEventListener('keypress', () => {}); // Caractere digitado
  
  // Eventos de Formulário
  elemento.addEventListener('submit', () => {});   // Envio de form
  elemento.addEventListener('change', () => {});   // Mudança em input
  elemento.addEventListener('input', () => {});    // Digitação em tempo real
  
  // Eventos de Documento
  window.addEventListener('load', () => {});      // Página carregada
  document.addEventListener('DOMContentLoaded', () => {}); // DOM pronto
```

## O Objeto Event
Cada evento carrega consigo um objeto com informações importantes:

📄 event-object.js

```javascript

  elemento.addEventListener('click', function(event) {
    // Informações básicas
    console.log(event.type);    // Tipo do evento
    console.log(event.target);  // Elemento que disparou o evento
    
    // Posição do mouse
    console.log(event.clientX); // Posição X do mouse
    console.log(event.clientY); // Posição Y do mouse
    
    // Teclas pressionadas
    console.log(event.key);     // Tecla (para eventos de teclado)
    console.log(event.code);    // Código da tecla
    
    // Prevenindo comportamento padrão
    event.preventDefault();     // Impede ação padrão
    
    // Parando propagação
    event.stopPropagation();   // Impede bubbling
  });
```

## Delegação de Eventos
Técnica eficiente para lidar com múltiplos elementos similares:

📄 event-delegation.js

```javascript

  // Em vez de:
  const botoes = document.querySelectorAll('.botao');
  botoes.forEach(botao => {
    botao.addEventListener('click', handleClick);
  });
  
  // Use:
  const container = document.querySelector('.container-botoes');
  container.addEventListener('click', function(event) {
    if (event.target.matches('.botao')) {
      handleClick(event);
    }
  });
```

## Desafio Prático
Crie um gerenciador de tarefas com eventos:

- Lista de tarefas interativa
- Eventos para adicionar/remover tarefas
- Marcação de tarefas concluídas
- Filtros de visualização

📄 task-manager.js

```javascript

  const taskManager = {
    init() {
      this.container = document.querySelector('.task-container');
      this.form = document.querySelector('.task-form');
      this.setupListeners();
    },
  
    setupListeners() {
      // Adicionar tarefa
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = this.form.querySelector('input');
        this.addTask(input.value);
        input.value = '';
      });
  
      // Delegação para tarefas
      this.container.addEventListener('click', (e) => {
        if (e.target.matches('.task-delete')) {
          this.deleteTask(e);
        } else if (e.target.matches('.task-toggle')) {
          this.toggleTask(e);
        }
      });
    },
  
    addTask(text) {
      const task = document.createElement('div');
      task.className = 'task';
      task.innerHTML = `
        ${text}
        <button class="task-toggle">✓</button>
        <button class="task-delete">×</button>
      `;
      this.container.appendChild(task);
    },
  
    deleteTask(event) {
      event.target.closest('.task').remove();
    },
  
    toggleTask(event) {
      event.target.closest('.task').classList.toggle('completed');
    }
  };
```

## Dicas e Melhores Práticas

- Use delegação de eventos para melhor performance com muitos elementos
- Sempre limpe (removeEventListener) eventos que não são mais necessários
- Evite funções anônimas em eventos para facilitar remoção posterior
- Considere o debounce/throttle para eventos frequentes como scroll e resize
- Mantenha os manipuladores de eventos pequenos e focados

## Perguntas Frequentes

Qual a diferença entre event.target e event.currentTarget?
event.target é o elemento que originou o evento, enquanto event.currentTarget é o elemento onde o listener está anexado. Em delegação de eventos, eles podem ser diferentes.

Por que às vezes preciso usar preventDefault()?
preventDefault() impede o comportamento padrão do navegador para certos eventos, como envio de formulários ou cliques em links. Útil quando você quer controlar completamente o comportamento.

Como lidar com eventos em elementos dinâmicos?
Use delegação de eventos em um elemento pai estático ou reatribua os listeners após criar novos elementos. Delegação é geralmente a melhor opção para performance.