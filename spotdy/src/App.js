import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './Router/Router'
import { BaseTheme } from './GlobalStyles/theme';

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <div className="app-container">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
