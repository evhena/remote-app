import React from 'react';
import ReactDOM from 'react-dom/client';
import RemoteApp from './RemoteApp.jsx';
import './index.css';
import Input from './components/Input.jsx';

export { RemoteApp };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RemoteApp />
  </React.StrictMode>
);
