import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import { theme } from 'styles/theme';
import GithubIssues from 'containers/GithubIssues';
import GlobalStyles from 'styles/GlobalStyles';
import store from './store';

export default (): ReactElement => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<GithubIssues />
		</ThemeProvider>
	</Provider>
);
