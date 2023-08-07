import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { router } from './router';
import { theme } from './styles/theme';
import { store } from './store';

import { ContentContainer, GlobalStyles, PageContainer } from './styles/global-styles';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/apollo';

function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<PageContainer>
						<ContentContainer>
							<RouterProvider router={router} />
						</ContentContainer>
					</PageContainer>

					<GlobalStyles />
				</ThemeProvider>
			</Provider>
		</ApolloProvider>
	);
}

export default App;
