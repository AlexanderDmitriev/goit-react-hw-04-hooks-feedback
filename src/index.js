import React from 'react';
import ReactDOM from 'react-dom';
import { App, App2 } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from "./components/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       {/* <App /> */}
       <App2 />
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

