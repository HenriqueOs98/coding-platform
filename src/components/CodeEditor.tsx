import { useState, useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  userId: string;
  executionSpeed: 'fast' | 'educational';
  onSpeedChange: (speed: 'fast' | 'educational') => void;
}

export function CodeEditor({ code, onChange, onRun }: CodeEditorProps) {
  const [validationMessage, setValidationMessage] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setValidationMessage('');
    
    try {
      // Client-side syntax validation
      new Function(code);
      onRun(); // This will trigger the parent's run handler
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

  // Throttled onChange handler to prevent too many updates
  const throttledOnChange = useCallback(
    (() => {
      let timeout: NodeJS.Timeout | null = null;
      return (value: string) => {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          onChange(value);
          timeout = null;
        }, 150);
      };
    })(),
    [onChange]
  );

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
          onChange={throttledOnChange}
          className="h-full border border-gray-700 rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
}