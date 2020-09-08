import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import swReg from './swReg';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

swReg();