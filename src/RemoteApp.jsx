import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Input from './components/Input';
import List from './components/List';

function RemoteApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <Input value={count} onChange={setCount} onSubmit={console.log} />
        <List items={['Learn React', 'Learn Vite', 'Make an awesome app']} />
      </div>
    </>
  );
}

export default RemoteApp;
