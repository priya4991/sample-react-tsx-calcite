import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

// Apply polyfills and then define the custom elements
// polyfills are not needed if you don't support IE11 or Edge
applyPolyfills().then(() => {
  defineCustomElements(window);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
