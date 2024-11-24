export interface Tutorial {
    id: string;
    title: string;
    description: string;
    initialCode: string;
    solution: string;
  } 


// Initial static tutorials
export const staticTutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Introdução ao JavaScript',
    description: `<h1>Bem-vindo ao Mundo da Programação!</h1>
<p>Você está prestes a começar uma jornada incrível! JavaScript é a linguagem que dá vida à web - ela faz sites e aplicativos funcionarem de forma mágica. 🪄</p>

<h2>🚀 História do JavaScript</h2>
<p>JavaScript tem uma história fascinante:</p>
<ul>
<li>Criado em 1995 em apenas 10 dias! ⚡</li>
<li>Originalmente chamado "Mocha" ☕</li>
<li>Hoje está presente em 97,5% dos sites</li>
<li>Usado por empresas como Netflix, Facebook e Google</li>
</ul>

<h2>💡 Seu Primeiro Comando</h2>
<p>Em JavaScript, usamos <code>console.log()</code> para mostrar mensagens no console:</p>
<pre><code>console.log("Olá, mundo!");</code></pre>
<p>Este comando é como mandar uma mensagem para o computador mostrar na tela!</p>

<h2>📝 Sua Primeira Missão</h2>
<p>Vamos começar com algo simples: imprima sua primeira mensagem usando <code>console.log()</code></p>
`,
    initialCode: '// Escreva seu primeiro código aqui:\n',
    solution: 'Olá, mundo!'
  },
  {
    id: '2',
    title: 'Construindo o MovieStarz',
    description: `<h1>Vamos Construir um App de Reviews de Filmes!</h1>
<p>Agora que você já sabe como fazer o computador mostrar mensagens, vamos criar algo mais legal: o MovieStarz, nosso próprio app de reviews de filmes! 🎬</p>

<h2>🎯 O Que Vamos Construir</h2>
<p>Nosso app MovieStarz vai ser capaz de:</p>
<ul>
<li>Guardar informações de usuários 👤</li>
<li>Salvar reviews de filmes ⭐</li>
<li>Recomendar filmes novos 🎥</li>
<li>E muito mais!</li>
</ul>

<h2>🔧 Ferramentas que Vamos Usar</h2>
<p>O console JavaScript tem várias formas de mostrar mensagens:</p>
<ul>
<li><code>console.log()</code> - mensagens normais ✨</li>
<li><code>console.warn()</code> - avisos ⚠️</li>
<li><code>console.error()</code> - erros ❌</li>
</ul>

<h2>📝 Sua Missão</h2>
<p>Vamos iniciar nosso app! Imprima <code>Starting MovieStarz server</code> no console.</p>
</details>`,
    initialCode: '// Inicie o servidor MovieStarz:\n',
    solution: 'Starting MovieStarz server'
  }
];

// Tutorial service to handle dynamic loading
export class TutorialService {
  private static instance: TutorialService;
  private tutorials: Tutorial[] = staticTutorials;

  private constructor() {}

  public static getInstance(): TutorialService {
    if (!TutorialService.instance) {
      TutorialService.instance = new TutorialService();
    }
    return TutorialService.instance;
  }

  public async getTutorials(): Promise<Tutorial[]> {
    // In the future, this will fetch from a database
    // For now, return static tutorials
    return this.tutorials;
  }

  public async getTutorialById(id: string): Promise<Tutorial | undefined> {
    // In the future, this will fetch a single tutorial from the database
    return this.tutorials.find(t => t.id === id);
  }

  public async loadTutorials(): Promise<void> {
    try {
      // In the future, this will load tutorials from an API/database
      // For now, we're using static data
      this.tutorials = staticTutorials;
    } catch (error) {
      console.error('Failed to load tutorials:', error);
      // Fallback to static tutorials if loading fails
      this.tutorials = staticTutorials;
    }
  }
} 