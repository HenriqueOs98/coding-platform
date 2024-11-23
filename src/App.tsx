import { useState, useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { CodeEditor } from './components/CodeEditor';
import { TutorialList } from './components/TutorialList';
import { Tutorial } from './types/Tutorial';
import { TutorialProgress } from './types/TutorialProgress.ts';

const initialTutorials: Tutorial[] = [
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
<li>É usado por empresas como Netflix, Facebook e Google</li>
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


function App() {
  const { user } = useAuthenticator();
  const [code, setCode] = useState(initialTutorials[0].initialCode);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial>(initialTutorials[0]);
  const [output, setOutput] = useState<string[]>([]);
  const [completedTutorials, setCompletedTutorials] = useState<string[]>([]);
  const [worker, setWorker] = useState<Worker | null>(null);

  // Load progress on mount
  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`tutorial-progress-${user.username}`);
      if (savedProgress) {
        const progress: TutorialProgress = JSON.parse(savedProgress);
        setCompletedTutorials(progress.completedTutorials);
        const lastTutorial = initialTutorials.find(t => t.id === progress.currentTutorialId);
        if (lastTutorial) {
          setSelectedTutorial(lastTutorial);
          setCode(lastTutorial.initialCode);
        }
      }
    }
  }, [user]);

  // Save progress when it changes
  useEffect(() => {
    if (user) {
      const progress: TutorialProgress = {
        userId: user.username,
        completedTutorials,
        currentTutorialId: selectedTutorial.id
      };
      localStorage.setItem(`tutorial-progress-${user.username}`, JSON.stringify(progress));
    }
  }, [completedTutorials, selectedTutorial.id, user]);

  const validateOutput = (output: string[]): boolean => {
    const solution = selectedTutorial.solution;
    const userOutput = output.join('\n').trim();
    return userOutput === solution.trim();
  };

  const handleTutorialSelect = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setCode(tutorial.initialCode);
  };

  const handleRun = () => {
    setOutput([]);
    
    if (worker) {
      worker.terminate();
    }

    const newWorker = new Worker(
      new URL('./workers/code.worker.ts', import.meta.url),
      { type: 'module' }
    );
    setWorker(newWorker);

    newWorker.onmessage = (e) => {
      if (e.data.type === 'output') {
        const newOutput = [...output, e.data.message];
        setOutput(newOutput);
        
        // Check if output is correct
        if (validateOutput(newOutput)) {
          setCompletedTutorials(prev => 
            prev.includes(selectedTutorial.id) 
              ? prev 
              : [...prev, selectedTutorial.id]
          );
        }
      }
      // ... rest of the worker handling
    };

    newWorker.onerror = (error) => {
      setOutput(prev => [...prev, `Worker Error: ${error.message}`]);
      newWorker.terminate();
      setWorker(null);
    };

    newWorker.postMessage({
      type: 'EXEC_CODE',
      files: [{ 
        Name: 'main.js', 
        Content: code 
      }]
    });
  };

  const handleNext = () => {
    const currentIndex = initialTutorials.findIndex(t => t.id === selectedTutorial.id);
    if (currentIndex < initialTutorials.length - 1) {
      const nextTutorial = initialTutorials[currentIndex + 1];
      setSelectedTutorial(nextTutorial);
      setCode(nextTutorial.initialCode);
      setOutput([]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = initialTutorials.findIndex(t => t.id === selectedTutorial.id);
    if (currentIndex > 0) {
      const prevTutorial = initialTutorials[currentIndex - 1];
      setSelectedTutorial(prevTutorial);
      setCode(prevTutorial.initialCode);
      setOutput([]);
    }
  };

  // Cleanup worker on component unmount
  useEffect(() => {
    return () => {
      if (worker) {
        worker.terminate();
      }
    };
  }, [worker]);

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="flex h-screen">
        {/* Tutorial sidebar - 5/5 height */}
        <div className="w-1/4 flex-shrink-0 border-r border-gray-700 overflow-y-auto">
          <TutorialList
            tutorials={initialTutorials}
            onSelect={handleTutorialSelect}
            selectedId={selectedTutorial.id}
            completedTutorials={completedTutorials}
            onNext={handleNext}
            onPrevious={handlePrevious}
            containerClassName="h-full"
          />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="p-4 flex justify-between items-center bg-gray-800 border-b border-gray-700">
            <h1 className="text-xl md:text-2xl font-bold text-white">Learn JavaScript</h1>
            <button
              onClick={() => {}}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
            >
              Sign out
            </button>
          </header>

          {/* Code editor - 3/5 height */}
          <div className="h-[60%] p-2">
            <CodeEditor
              code={code}
              onChange={setCode}
              onRun={handleRun}
              userId={user?.username || ''}
              executionSpeed="fast"
              onSpeedChange={() => {}}
            />
          </div>

          {/* Output - 2/5 height */}
          <div className="h-[40%] bg-gray-800 border-t border-gray-700 p-4">
            <h2 className="text-lg font-bold text-white mb-2">Output</h2>
            <div className="bg-gray-900 rounded-lg p-4 font-mono whitespace-pre-wrap overflow-y-auto h-[calc(100%-3rem)] text-sm text-white">
              {output.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;