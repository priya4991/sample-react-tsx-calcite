import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">

      <calcite-panel class="h-w-100">
        <div slot="header-content">Header!</div>
        <p>I have a footer.</p>
        <div slot="footer">Footer!</div>
      </calcite-panel>

    </div>
  );
}

export default App;
