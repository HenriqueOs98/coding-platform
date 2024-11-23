import * as acorn from 'acorn';

// Create a custom console.log with proper output handling
const originalLog = console.log;
console.log = (...args) => {
  const message = args.map(arg => 
    typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
  ).join(' ');
  self.postMessage({ type: 'output', message });
  originalLog.apply(console, args);
};

// State field to track execution state

self.addEventListener('message', async (e: MessageEvent) => {
  if (e.data.type === "EXEC_CODE") {
    let code = e.data.files[0].Content;
    
    try {
      // Parse and validate code before execution
      acorn?.parse(code, { ecmaVersion: 2020, sourceType: "module" });
      
      // Execute the code
      await eval(`(async () => { 
        try {
          ${code}
        } catch (err) {
          throw err;
        }
      })()`);
      
      self.postMessage({ type: 'done' });
    } catch (err: any) {
      self.postMessage({ 
        type: 'error', 
        message: err.toString(),
        stack: err.stack 
      });
    } finally {
      console.log = originalLog;
    }
  }
});

export {};