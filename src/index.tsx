import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system'

const appTheme = createTheme()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider theme={appTheme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)
