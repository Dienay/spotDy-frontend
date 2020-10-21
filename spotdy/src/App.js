import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './Router/Router'
import { BaseTheme } from './GlobalStyles/theme';
import styled from 'styled-components'

const Container = styled.div`
  background-color: rgba(24, 24, 24, .1);
  min-width: 100vw;
  min-height: 100vh;
`

function App() {
  
  return (
        <ThemeProvider theme={BaseTheme}>
          <Container>
            <Router />
          </Container>
        </ThemeProvider>
  );
}

export default App;
