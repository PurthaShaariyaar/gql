// Import required libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import './stylesheets/index.css';
import App from './App';

// Initialize the root to an HTML element
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the components
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

