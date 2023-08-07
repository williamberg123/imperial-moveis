import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: import.meta.env.VITE_GRAPHCMS_PROJECT_URL,
	cache: new InMemoryCache(),
});
