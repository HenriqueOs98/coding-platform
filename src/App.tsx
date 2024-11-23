import { useState, useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { CodeEditor } from './components/CodeEditor';
import { TutorialList } from './components/TutorialList';
import { Tutorial } from './types/Tutorial';

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
    solution: 'console.log("Olá, mundo!");'
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
    solution: 'console.log("Starting MovieStarz server");'
  }
];


function App() {
  const { user, signOut } = useAuthenticator();
  const [code, setCode] = useState(initialTutorials[0].initialCode);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial>(initialTutorials[0]);
  const [output, setOutput] = useState<string[]>([]);
  const [worker, setWorker] = useState<Worker | null>(null);

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

    const timeoutId = setTimeout(() => {
      if (newWorker) {
        newWorker.terminate();
        setWorker(null);
        setOutput(prev => [...prev, 'Error: Code execution timed out']);
      }
    }, 5000);

    newWorker.onmessage = (e) => {
      switch (e.data.type) {
        case 'output':
          setOutput(prev => [...prev, e.data.message]);
          break;
        case 'error':
          setOutput(prev => [...prev, `Error: ${e.data.message}`]);
          if (e.data.stack) {
            setOutput(prev => [...prev, e.data.stack]);
          }
          clearTimeout(timeoutId);
          newWorker.terminate();
          setWorker(null);
          break;
        case 'done':
          clearTimeout(timeoutId);
          newWorker.terminate();
          setWorker(null);
          break;
      }
    };

    newWorker.onerror = (error) => {
      clearTimeout(timeoutId);
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
            containerClassName="h-full"
          />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="p-4 flex justify-between items-center bg-gray-800 border-b border-gray-700">
            <h1 className="text-xl md:text-2xl font-bold text-white">Learn JavaScript</h1>
            <button
              onClick={signOut}
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