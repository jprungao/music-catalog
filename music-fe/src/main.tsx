
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client/react';
import { HttpLink } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
  cache: new InMemoryCache()
});

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </ApolloProvider>
)
