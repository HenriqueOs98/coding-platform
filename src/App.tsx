import { useState, useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import DOMPurify from 'dompurify';
import { TutorialService, Tutorial } from './data/tutorials';
import { ChatButton } from './components/ChatButton';
import { SubscriptionPrompt } from './components/SubscriptionPrompt';
import { generateClient } from 'aws-amplify/api';
import { type Schema } from '../amplify/data/resource';



const STORAGE_KEY_PREFIX = 'tutorial-progress-';

interface TutorialProgress {
  userId: string;
  completedTutorials: string[];
  currentTutorialId: string;
}

interface CodeEditorProps {

  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  userId: string;
  executionSpeed: 'fast' | 'educational';
  onSpeedChange: (speed: 'fast' | 'educational') => void;
}

interface TutorialListProps {
  tutorials: Tutorial[];
  onSelect: (tutorial: Tutorial) => void;
  selectedId: string;
  completedTutorials: string[];
  onNext: () => void;
  onPrevious: () => void;
  containerClassName?: string;
}


// Helper Components
function CodeEditor({ code, onChange, onRun }: CodeEditorProps) {
  const [validationMessage, setValidationMessage] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setValidationMessage('');
    
    try {
      new Function(code); // Syntax validation
      onRun();
    } catch (error) {
      setValidationMessage(`Error: ${error instanceof Error ? error.message : 'Invalid code'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const downloadCode = () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>JavaScript Code</title>
          <style>body { padding: 1rem; margin: 0; font-family: sans-serif; }</style>
        </head>
        <body>
          <div id="output"></div>
          <script>
            console.log = function(...args) {
              const output = document.getElementById('output');
              output.innerHTML += args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg) : arg
              ).join(' ') + '<br>';
            };
            ${code}
          </script>
        </body>
      </html>`;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-wrap gap-2 mb-2">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className={`px-4 py-2 text-white rounded-md transition-colors ${
            isRunning ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isRunning ? 'Running...' : 'Run Code'}
        </button>
        <button
          onClick={downloadCode}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Download
        </button>
      </div>
      
      {validationMessage && (
        <div className="px-4 py-2 mb-2 bg-red-100 text-red-800 rounded-md">
          {validationMessage}
        </div>
      )}
      
      <div className="flex-1 h-[400px] lg:h-[calc(100%-4rem)]">
        <CodeMirror
          value={code}
          height="100%"
          theme={oneDark}
          extensions={[javascript()]}
          onChange={onChange}
          className="h-full border border-gray-700 rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
}

function TutorialList({ 
  tutorials, 
  onSelect,
  selectedId, 
  completedTutorials,
  onNext,
  onPrevious,
  containerClassName 
}: TutorialListProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentTutorial = tutorials.find(t => t.id === selectedId);
  const currentIndex = tutorials.findIndex(t => t.id === selectedId);
  const isFirstTutorial = currentIndex === 0;
  const isLastTutorial = currentIndex === tutorials.length - 1;
  const isCurrentTutorialCompleted = completedTutorials.includes(selectedId);

  return (
    <div className={`bg-gray-800 p-4 flex flex-col ${containerClassName}`}>
      {/* Tutorial Navigation - Mobile */}
      <div className="sm:hidden mb-4 flex justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={isFirstTutorial}
          className={`px-4 py-2 rounded-md ${
            isFirstTutorial ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          Previous
        </button>
        
        <span className="text-gray-400">
          Tutorial {currentIndex + 1} of {tutorials.length}
        </span>
        
        <button
          onClick={onNext}
          disabled={!isCurrentTutorialCompleted || isLastTutorial}
          className={`px-4 py-2 rounded-md ${
            !isCurrentTutorialCompleted || isLastTutorial
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          } text-white`}
        >
          Next
        </button>
      </div>

      {/* Tutorial Dropdown */}
      <div className="relative mb-4 border-b border-gray-700 pb-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex justify-between items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
        >
          <span>{currentTutorial?.title || 'Select Tutorial'}</span>
          <svg
            className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
            {tutorials.map((tutorial, index) => {
              const isAvailable = index === 0 || completedTutorials.includes(tutorials[index - 1].id);
              
              return (
                <button
                  key={tutorial.id}
                  onClick={() => {
                    if (isAvailable) {
                      onSelect(tutorial);
                      setIsDropdownOpen(false);
                    }
                  }}
                  className={`w-full text-left px-4 py-2 ${
                    tutorial.id === selectedId
                      ? 'bg-blue-600 text-white'
                      : isAvailable
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-500 cursor-not-allowed bg-gray-800'
                  } ${
                    completedTutorials.includes(tutorial.id)
                      ? 'border-l-4 border-green-500'
                      : ''
                  }`}
                >
                  <div className="flex items-center">
                    {completedTutorials.includes(tutorial.id) && (
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {!isAvailable && (
                      <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {tutorial.title}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Tutorial Content */}
      <div className="flex-grow overflow-y-auto h-[400px] sm:h-auto">
        <div 
          className="prose prose-invert max-w-none space-y-6" 
          dangerouslySetInnerHTML={{ 
            __html: DOMPurify.sanitize(currentTutorial?.description || '') 
          }}
        />
      </div>
      
      {/* Desktop Navigation */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            disabled={isFirstTutorial}
            className={`px-4 py-2 rounded-md ${
              isFirstTutorial ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            Previous
          </button>
          
          <span className="text-gray-400">
            Tutorial {currentIndex + 1} of {tutorials.length}
          </span>
          
          <button
            onClick={onNext}
            disabled={!isCurrentTutorialCompleted || isLastTutorial}
            className={`px-4 py-2 rounded-md ${
              !isCurrentTutorialCompleted || isLastTutorial
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            } text-white`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const { user, signOut} = useAuthenticator();
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [code, setCode] = useState('');
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [output, setOutput] = useState<string[]>([]);
  const [completedTutorials, setCompletedTutorials] = useState<string[]>([]);
  const [worker, setWorker] = useState<Worker | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showSubscriptionPrompt, setShowSubscriptionPrompt] = useState(false);
  const client = generateClient<Schema>();

  useEffect(() => {
    const loadTutorials = async () => {
      setIsLoading(true);
      try {
        // Get subscription status from user attributes
        console.log(user?.attributes.['custom:isSubscribed'])

        const isUserSubscribed = user?.attributes?.['custom:isSubscribed'] === 'true';
        setIsSubscribed(isUserSubscribed);
        console.log(user?.attributes.['custom:isSubscribed'])

        const tutorialService = TutorialService.getInstance();
        const loadedTutorials = await tutorialService.getTutorials(isUserSubscribed);
        setTutorials(loadedTutorials);
        
        if (!selectedTutorial && loadedTutorials.length > 0) {
          setSelectedTutorial(loadedTutorials[0]);
          setCode(loadedTutorials[0].initialCode);
        }
      } catch (error) {
        console.error('Failed to load tutorials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTutorials();
  }, [user]);

  const handleTutorialSelect = async (tutorial: Tutorial) => {
    if (tutorial.id !== '1' && !isSubscribed) {
      // Show subscription required message
      alert('Please subscribe to access this tutorial');
      return;
    }

    setSelectedTutorial(tutorial);
    setCode(tutorial.initialCode);
    setOutput([]);
  };

  const handleRun = () => {
    if (worker) {
      worker.terminate();
    }

    const newWorker = new Worker(
      new URL('./workers/code.worker.ts', import.meta.url),
      { type: 'module' }
    );

    newWorker.onmessage = (e) => {
      if (e.data.type === 'output') {
        setOutput(prev => {
          const newOutput = [...prev, e.data.message];
          if (selectedTutorial && newOutput.join('\n').trim() === selectedTutorial.solution.trim()) {
            setCompletedTutorials(prev => {
              const newCompleted = prev.includes(selectedTutorial.id) ? 
                prev : 
                [...prev, selectedTutorial.id];
              
              // Show subscription prompt after completing first tutorial
              if (selectedTutorial.id === '1' && !prev.includes('1') && !isSubscribed) {
                setShowSubscriptionPrompt(true);
              }
              
              return newCompleted;
            });
          }
          return newOutput;
        });
      }
    };

    newWorker.onerror = (error) => {
      setOutput(prev => [...prev, `Error: ${error.message}`]);
      newWorker.terminate();
      setWorker(null);
    };

    setOutput([]);
    setWorker(newWorker);

    newWorker.postMessage({
      type: 'EXEC_CODE',
      files: [{ Name: 'main.js', Content: code }]
    });
  };

  useEffect(() => {
    if (user?.username) {
      const savedProgress = localStorage.getItem(`${STORAGE_KEY_PREFIX}${user.username}`);
      if (savedProgress) {
        const progress: TutorialProgress = JSON.parse(savedProgress);
        setCompletedTutorials(progress.completedTutorials);
        const lastTutorial = tutorials.find(t => t.id === progress.currentTutorialId);
        if (lastTutorial) {
          handleTutorialSelect(lastTutorial);
        }
      }
    }
  }, [user, tutorials]);

  useEffect(() => {
    if (user?.username && selectedTutorial) {
      const progress: TutorialProgress = {
        userId: user.username,
        completedTutorials,
        currentTutorialId: selectedTutorial.id
      };
      localStorage.setItem(`${STORAGE_KEY_PREFIX}${user.username}`, JSON.stringify(progress));
    }
  }, [completedTutorials, selectedTutorial, user]);

  useEffect(() => {
    return () => worker?.terminate();
  }, [worker]);

  const handleSubscribe = async () => {
    try {
      if (!user?.username) {
        throw new Error('User not authenticated');
      }

      // Update user attributes to mark as subscribed
      await client.models.User.update({
        id: user.username,
        isSubscribed: true,
        subscriptionEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      });

      // Refresh tutorials with subscription access
      const tutorialService = TutorialService.getInstance();
      const loadedTutorials = await tutorialService.getTutorials(true);
      setTutorials(loadedTutorials);
      setIsSubscribed(true);
      setShowSubscriptionPrompt(false);

    } catch (error) {
      console.error('Failed to process subscription:', error);
      alert('Failed to process subscription. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-900">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-white">Loading tutorials...</div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row h-screen">
          {/* Tutorial List - Full width on mobile, sidebar on sm+ */}
          <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-700">
            <TutorialList
              tutorials={tutorials}
              onSelect={handleTutorialSelect}
              selectedId={selectedTutorial?.id || ''}
              completedTutorials={completedTutorials}
              onNext={() => {
                const nextIndex = tutorials.findIndex(t => t.id === selectedTutorial?.id) + 1;
                if (nextIndex < tutorials.length) {
                  handleTutorialSelect(tutorials[nextIndex]);
                }
              }}
              onPrevious={() => {
                const prevIndex = tutorials.findIndex(t => t.id === selectedTutorial?.id) - 1;
                if (prevIndex >= 0) {
                  handleTutorialSelect(tutorials[prevIndex]);
                }
              }}
              containerClassName="h-[500px] sm:h-full" // Increased height for mobile
            />
          </div>
          
          {/* Code Editor and Output Section */}
          <div className="flex-1 flex flex-col">
            <header className="p-4 flex justify-between items-center bg-gray-800 border-b border-gray-700">
              <h1 className="text-xl md:text-2xl font-bold text-white">Learn JavaScript</h1>
              <button 
                onClick={signOut}
                className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
              >
                Sign out
              </button>
            </header>

            <div className="h-[40vh] sm:h-[60%] p-2">
              <CodeEditor
                code={code}
                onChange={setCode}
                onRun={handleRun}
                userId={user?.username || ''}
                executionSpeed="fast"
                onSpeedChange={() => {}}
              />
            </div>

            <div className="h-[30vh] sm:h-[40%] bg-gray-800 border-t border-gray-700 p-4">
              <h2 className="text-lg font-bold text-white mb-2">Output</h2>
              <div className="bg-gray-900 rounded-lg p-4 font-mono whitespace-pre-wrap overflow-y-auto h-[calc(100%-3rem)] text-sm text-white">
                {output.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ChatButton />
      <SubscriptionPrompt 
        isOpen={showSubscriptionPrompt}
        onClose={() => setShowSubscriptionPrompt(false)}
        onSubscribe={handleSubscribe}
      />
    </main>
  );
}

export default App;