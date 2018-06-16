import React from 'react';
import Photos from './Photos';
import '.././styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Isaac & Jiselle's Photo Gallery</h1>
        <span role='img' aria-label='emoji'>🐵❤️🐰</span>
      </header>
      <Photos />
    </div>
  );
}

export default App;
