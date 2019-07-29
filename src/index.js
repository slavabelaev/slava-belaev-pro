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

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <ErrorBoundary>
            <GithubServiceProvider value={githubService}>
                <Router>
                    <App />
                </Router>
            </GithubServiceProvider>
        </ErrorBoundary>
    </MuiThemeProvider>,
    document.getElementById('root')
);
