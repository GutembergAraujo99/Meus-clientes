import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { getOrCreateTheme } from './theme';

ReactDOM.render(
    <ThemeProvider theme={getOrCreateTheme()}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
