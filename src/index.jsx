import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('worker.js');
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
