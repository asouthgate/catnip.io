import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas';
import "./styles/index.css";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h3>welcome to catnip.io</h3>
    <Canvas />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();