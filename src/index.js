import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

/* eslint-disable react/jsx-filename-extension */

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_HOST}/graphql`
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
