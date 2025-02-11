## Manipulação do DOM com JavaScript
Neste tutorial, você aprenderá como o JavaScript interage com o HTML e CSS através do DOM (Document Object Model). Você descobrirá como selecionar, modificar e manipular elementos da sua página web dinamicamente.

## O que é o DOM?
O DOM (Document Object Model) é uma interface de programação que representa a estrutura de um documento HTML como uma árvore de objetos. Cada elemento HTML se torna um objeto que pode ser manipulado via JavaScript.

📄 Estrutura Básica do DOM

```javascript

  document
    └── html
        ├── head
        │   ├── title
        │   └── meta
        └── body
            ├── div
            ├── p
            └── ul
                ├── li
                └── li
```

## Selecionando Elementos
O JavaScript oferece vários métodos para selecionar elementos do DOM:

📄 métodos-seleção.js

```javascript

  // Selecionar um único elemento
  const elemento = document.querySelector('.minha-classe');
  const porId = document.getElementById('meu-id');
  
  // Selecionar múltiplos elementos
  const elementos = document.querySelectorAll('.minha-classe');
  const porClasse = document.getElementsByClassName('minha-classe');
  const porTag = document.getElementsByTagName('div');
```

## Modificando Elementos
Após selecionar elementos, você pode modificá-los de várias formas:

📄 modificação-elementos.js

```javascript

  // Modificando estilos
  elemento.style.backgroundColor = 'blue';
  elemento.style.marginTop = '20px';
  elemento.style.display = 'flex';
  
  // Modificando conteúdo
  elemento.innerText = 'Novo texto';
  elemento.innerHTML = '<span>HTML dinâmico</span>';
  
  // Modificando atributos
  elemento.setAttribute('data-id', '123');
  elemento.id = 'novo-id';
  elemento.className = 'nova-classe';
```

## Manipulando Classes
O DOM oferece uma API específica para manipular classes CSS:

📄 classes.js

```javascript

  const elemento = document.querySelector('.meu-elemento');
  
  // Adicionando classes
  elemento.classList.add('nova-classe');
  
  // Removendo classes
  elemento.classList.remove('classe-antiga');
  
  // Alternando classes
  elemento.classList.toggle('visivel');
  
  // Verificando se possui uma classe
  if (elemento.classList.contains('ativo')) {
    console.log('Elemento está ativo');
  }
```

## Eventos do DOM
Você pode reagir a interações do usuário através de eventos:

📄 eventos.js

```javascript

  const botao = document.querySelector('.meu-botao');
  
  // Adicionando evento de clique
  botao.addEventListener('click', () => {
    console.log('Botão foi clicado!');
  });
  
  // Removendo evento
  const meuCallback = () => console.log('Clique');
  botao.removeEventListener('click', meuCallback);
  
  // Eventos comuns
  elemento.addEventListener('mouseover', () => {});
  elemento.addEventListener('keydown', () => {});
  elemento.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede envio do formulário
  });
```

## Desafio Prático
Crie uma lista de tarefas interativa:

- Permita adicionar novas tarefas
- Possibilite marcar tarefas como concluídas
- Adicione botão para remover tarefas
- Implemente filtragem de tarefas

📄 todo-list.js

```javascript

  const todoList = {
    init() {
      this.form = document.querySelector('.todo-form');
      this.list = document.querySelector('.todo-list');
      this.setupEventListeners();
    },
  
    setupEventListeners() {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = this.form.querySelector('input');
        this.addTask(input.value);
        input.value = '';
      });
    },
  
    addTask(text) {
      const li = document.createElement('li');
      li.innerHTML = `
        ${text}
        <button class="delete">×</button>
      `;
      
      li.querySelector('.delete').addEventListener('click', () => {
        li.remove();
      });
  
      this.list.appendChild(li);
    }
  };
```

## Dicas e Melhores Práticas

- Minimize manipulações diretas do DOM para melhor performance
- Use delegação de eventos para elementos dinâmicos
- Prefira classList em vez de manipular className diretamente
- Cache referências a elementos frequentemente acessados
- Evite usar innerHTML quando innerText ou textContent forem suficientes

## Perguntas Frequentes

Qual a diferença entre innerHTML e innerText?
innerHTML permite inserir HTML que será interpretado pelo navegador, enquanto innerText trata todo o conteúdo como texto puro, sendo mais seguro para conteúdo não confiável.

Por que meu evento não funciona em elementos dinâmicos?
Eventos são associados apenas a elementos existentes no momento da atribuição. Para elementos criados dinamicamente, use delegação de eventos no elemento pai ou reatribua os eventos após criar os elementos.

Como melhorar a performance ao manipular muitos elementos?
Use DocumentFragment para fazer múltiplas alterações fora do DOM e depois insira tudo de uma vez. Minimize o número de acessos ao DOM e agrupe suas modificações.