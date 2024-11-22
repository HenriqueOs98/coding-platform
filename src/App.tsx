import { useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { CodeEditor } from './components/CodeEditor';
import { OutputPanel } from './components/OutputPanel';
import { TutorialList } from './components/TutorialList';
import { Tutorial } from './types/Tutorial';

// Sample tutorials (later to be fetched from DynamoDB)
const initialTutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Hello World',
    description: 'Learn to write your first JavaScript program',
    initialCode: 'console.log("Hello, World!");',
    solution: 'console.log("Hello, World!");'
  },
  {
    id: '2',
    title: 'Variables',
    description: 'Learn about variables in JavaScript',
    initialCode: '// Declare a variable and print it\nlet message = "Hello";\nconsole.log(message);',
    solution: 'let message = "Hello";\nconsole.log(message);'
  }
];

function App() {
  const { user, signOut } = useAuthenticator();
  const [code, setCode] = useState(initialTutorials[0].initialCode);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial>(initialTutorials[0]);
  const [output, setOutput] = useState('');

  const handleTutorialSelect = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setCode(tutorial.initialCode);
  };

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="flex h-screen">
        <TutorialList
          tutorials={initialTutorials}
          onSelect={handleTutorialSelect}
          selectedId={selectedTutorial.id}
        />
        
        <div className="flex-1 flex flex-col p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">JavaScript Playground</h1>
            <button
              onClick={signOut}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 
                       transition-colors duration-200"
            >
              Sign out
            </button>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4">
            <CodeEditor
              code={code}
              onChange={setCode}
              onRun={() => setOutput(code)}
              userId={user?.username || ''}
            />
            <OutputPanel code={output} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

