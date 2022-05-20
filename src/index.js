import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { PepsiProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PepsiProvider>
      <App />
    </PepsiProvider>
  </React.StrictMode>
);
