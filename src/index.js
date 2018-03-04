import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable react/jsx-filename-extension */

const client = new ApolloClient({
  // uri: 'http://localhost:3001/graphql',
  uri: 'https://chennai-acco-server.herokuapp.com/graphql',
});

// const ApolloApp = () => (
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
// );

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
