import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  userId: string;
}

export function CodeEditor({ code, onChange, onRun }: CodeEditorProps) {
  const [validationMessage, setValidationMessage] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const validateAndRun = async () => {
    setIsRunning(true);
    setValidationMessage('');
    
    try {
      // Client-side syntax validation
      new Function(code);
      
      // If validation passes, clear any error message and run the code
      setValidationMessage('');
      onRun();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Invalid code';
      setValidationMessage(`Error: ${errorMessage}`);
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
  <style>
    body { padding: 1rem; margin: 0; font-family: sans-serif; }
  </style>
</head>
<body>
  <div id="output"></div>
  <script>
    // Capture console.log output
    const originalLog = console.log;
    console.log = function(...args) {
      originalLog.apply(console, args);
      const output = document.getElementById('output');
      output.innerHTML += args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : arg
      ).join(' ') + '<br>';
    };
    
    // Your code
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
      <div className="flex justify-between items-center mb-2">
        <div className="space-x-2">
          <button
            onClick={validateAndRun}
            disabled={isRunning}
            className={`px-4 py-2 text-white rounded-md transition-colors duration-200
              ${isRunning 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700'}`}
          >
            {isRunning ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Running...
              </span>
            ) : 'Run Code'}
          </button>
          <button
            onClick={downloadCode}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
                     transition-colors duration-200"
          >
            Download
          </button>
        </div>
        {validationMessage && (
          <div className="px-4 py-2 bg-red-100 text-red-800 rounded-md">
            {validationMessage}
          </div>
        )}
      </div>
      <CodeMirror
        value={code}
        height="100%"
        theme={oneDark}
        extensions={[javascript()]}
        onChange={onChange}
        className="flex-grow border border-gray-700 rounded-lg overflow-hidden"
      />
    </div>
  );
}