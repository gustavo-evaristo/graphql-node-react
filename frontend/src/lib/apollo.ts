import { InMemoryCache, ApolloClient } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:3333',
  cache: new InMemoryCache()
})