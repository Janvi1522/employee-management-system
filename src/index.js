import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',  // Adjust your backend URL here
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
