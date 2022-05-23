import React from 'react';
import './App.css';
import DisplayData from './DisplayData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AirCONTROL</h1>
      </header>
      <table className="Display-table">
        <tr>
          <td><DisplayData name="Temperature" value={26}></DisplayData></td>
          <td><DisplayData name="Humidity" value={0.6}></DisplayData></td>
        </tr>
        <tr>
          <td><DisplayData name="Temperature" value={26}></DisplayData></td>
          <td><DisplayData name="Humidity" value={0.6}></DisplayData></td>
        </tr>
      </table>

    </div>
  );
}

export default App;
