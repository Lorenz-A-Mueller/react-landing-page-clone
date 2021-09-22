import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const globalStyles = css`
  html {
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  body {
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
