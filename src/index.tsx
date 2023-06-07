// Import required libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import './stylesheets/index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './app/graphql';

// Initialize the root to an HTML element
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the components
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

