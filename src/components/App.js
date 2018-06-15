import React from 'react';
import Photos from './Photos';
import logo from '../logo.svg';
import '.././styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Photos />
    </div>
  );
}

export default App;
