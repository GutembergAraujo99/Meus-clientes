import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { getOrCreateTheme } from './theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={getOrCreateTheme()}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
