import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const sendPrompt = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/ai`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Map Assistant</h1>
      <textarea rows="4" value={prompt} onChange={e => setPrompt(e.target.value)} />
      <br />
      <button onClick={sendPrompt}>Ask AI</button>
      <pre>{response}</pre>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// redeploy trigger
