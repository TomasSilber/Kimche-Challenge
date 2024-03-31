import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rickandmorty-tomassilbergleit.vercel.app'
  })
});




ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client = {client}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>,
)
