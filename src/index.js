import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {createServer, Model} from 'miragejs'
import { PepsiProvider } from './context';
import { PostProvider } from './context/apiContext';

createServer({
  models:{
    post:Model,
  },

  seeds(server){
    server.db.loadData({
      posts:[
        {          
          posties: 'Pepsi Rock Festival',
          postBodie: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
          id: Date.now(),
        },
      ]
    })
  },

  routes(){
    this.namespace = '/news/api';

    this.get('/posts', () => {
      return this.schema.all('post')
    })

    this.post('/posts', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('post', data);
    })

    this.delete('/posts', (schema, request) => {
      const id = request.params;

      return schema.find(id).destroy;
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostProvider>
      <PepsiProvider>
        <App />
      </PepsiProvider>
    </PostProvider>
  </React.StrictMode>
);
