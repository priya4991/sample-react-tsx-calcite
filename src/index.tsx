import React, { HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyPolyfills, defineCustomElements, JSX as LocalJSX} from '@esri/calcite-components/dist/loader';
import '@esri/calcite-components/dist/calcite/calcite.css';

//the following code is to allow tsx to use calcite components in a react tsx project.
type StencilToReact<T> = {
  // [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & { //had to change out of this to accommodate 'key' in components
  [P in keyof T]?: any & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
  };
} ;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {
    }
  }
}

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
