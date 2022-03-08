import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.scss';
import { Main } from './modules/Main';
import { getOrCreateTheme } from './theme';

function App() {
    return <ThemeProvider theme={getOrCreateTheme()}>
        <div className="App">
            <Main />
        </div>
    </ThemeProvider>
}

export default App;