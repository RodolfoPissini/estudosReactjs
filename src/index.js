import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {createServer} from 'miragejs'
import { PepsiProvider } from './context';

createServer({
  routes(){
    this.namespace = '/news/api';

    this.get('/posts', () => {
      return[
        {
          id: 1, 
          post: 'novas ambalagens',
          bodyPost: 'Esse mês chegam as novas embalagens da Pepsi'
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PepsiProvider>
      <App />
    </PepsiProvider>
  </React.StrictMode>
);
