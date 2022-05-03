import React from 'react';
import './App.css';
import DisplayData from './DisplayData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AirCONTROL</h1>
      </header>
      <div>
        <DisplayData name="Temperature" value={26}></DisplayData>
        <DisplayData name="Humidity" value={0.6}></DisplayData>
      </div>
    </div>
  );
}

export default App;
