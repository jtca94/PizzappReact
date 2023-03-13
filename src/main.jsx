import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const theme = createTheme({
  typography: {
    fontFamily: ['"Ubuntu"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),
  },


  palette: {
    primary: { main: '#03071E', second: '#370617', third: '#6A040F', fourth: '#9D0208', fifth: '#D00000', sixth: '#DC2F02', seventh: '#E85D04', eight: '#F48C06', nine: '#FAA307', ten: '#FFBA08' },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline >
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CssBaseline>
    </BrowserRouter>
  </React.StrictMode>,
)
