import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from "./components/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

