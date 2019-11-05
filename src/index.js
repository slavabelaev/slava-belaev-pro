import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ErrorBoundary from './components/ErrorBoundary';
import App from './components/App';
import theme from './theme';
import { GithubServiceProvider } from './components/GithubServiceContext';
import GithubService from './services';

const githubService = new GithubService();
const Root = () => (
    <MuiThemeProvider theme={theme}>
        <ErrorBoundary>
            <GithubServiceProvider value={githubService}>
                <Router>
                    <App />
                </Router>
            </GithubServiceProvider>
        </ErrorBoundary>
    </MuiThemeProvider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);

// if (rootElement.hasChildNodes()) {
//   ReactDOM.hydrate(<Root />, rootElement);
// } else {
//   ReactDOM.render(<Root />, rootElement);
// }