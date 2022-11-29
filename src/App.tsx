import React from 'react';
import './App.css';
import HoursList from './components/HoursList';
import OpenToday from './components/OpenToday';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e046d',
    }
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
    body1: {
      fontSize: '16pt',
      fontWeight: '300',
    },
    h5: {
      fontSize: '20pt',
      fontWeight: '500',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{width: 350}}>
          <Typography variant='h5' sx={{mb: 5}}>Myymälä</Typography>
          <OpenToday/>
          <HoursList/>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
