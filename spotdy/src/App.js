import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './Router/Router'
import { BaseTheme } from './GlobalStyles/theme';
import { axiosConfig, baseUrl } from '../src/Common/CommonConst';
import axios from 'axios'
import MusicContext from './Contexts/MusicContext';

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
