import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('worker.js');
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
