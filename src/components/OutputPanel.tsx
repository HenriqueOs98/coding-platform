import { useEffect, useRef } from 'react';

interface OutputPanelProps {
  code: string;
}

export function OutputPanel({ code }: OutputPanelProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: sans-serif; margin: 20px; }
                .output { background: #f0f0f0; padding: 10px; border-radius: 4px; }
              </style>
            </head>
            <body>
              <div id="output" class="output"></div>
              <script>
                const originalConsoleLog = console.log;
                console.log = (...args) => {
                  originalConsoleLog.apply(console, args);
                  const output = document.getElementById('output');
                  output.innerHTML += args.map(arg => 
                    typeof arg === 'object' ? JSON.stringify(arg) : arg
                  ).join(' ') + '<br>';
                };
                try {
                  ${code}
                } catch (error) {
                  console.log('Error:', error.message);
                }
              </script>
            </body>
          </html>
        `);
        doc.close();
      }
    }
  }, [code]);

  return (
    <iframe
      ref={iframeRef}
      title="Output"
      className="w-full h-full bg-white rounded-lg border border-gray-300"
      sandbox="allow-scripts"
    />
  );
} 