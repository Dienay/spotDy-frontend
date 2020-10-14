import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './Router/Router'
import { BaseTheme } from './GlobalStyles/theme';
import { axiosConfig, baseUrl } from '../src/Common/CommonConst';
import axios from 'axios'
import MusicContext from './Contexts/MusicContext';

function App() {
  const [list, setList] = useState("")
  const [currentState, setCurrentState] = useState("")

    useEffect(() => {
      getMusics()
  },[list])

    const getMusics = () =>{
        axios
        .get(`${baseUrl}/music/musics`, axiosConfig)
        .then(response => {
            setList(response.data.result)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  return (
    <HeaderContext.Provider>
      <MusicContext.Provider value={list}>
        <ThemeProvider theme={BaseTheme}>
          <div className="app-container">
            <Router />
          </div>
        </ThemeProvider>
      </MusicContext.Provider>
    </HeaderContext.Provider>
  );
}

export default App;
