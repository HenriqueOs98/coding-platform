import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  userId: string;
}

export function CodeEditor({ code, onChange, onRun, userId }: CodeEditorProps) {
  const [validationMessage, setValidationMessage] = useState('');

  const validateAndRun = async () => {
    try {
      new Function(code); // Validate syntax
      
      await client.models.CodeSnippet.create({
        language: 'javascript',
        code,
        isValid: true,
        validationMessage: 'Code is valid',
        userId,
      });
      
      setValidationMessage('');
      onRun();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Invalid code';
      
      await client.models.CodeSnippet.create({
        language: 'javascript',
        code,
        isValid: false,
        validationMessage: errorMessage,
        userId,
      });
      
      setValidationMessage(`Error: ${errorMessage}`);
    }
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.js';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <div className="space-x-2">
          <button
            onClick={validateAndRun}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 
                     transition-colors duration-200"
          >
            Run Code
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