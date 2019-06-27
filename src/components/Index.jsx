import React from 'react';
import { render } from 'react-dom';
import App from './App';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('worker.js');
}

render(<App />, document.getElementById('app'));
