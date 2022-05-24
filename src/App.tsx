import React from 'react';
import './App.css';
import DisplayData from './DisplayData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AirConTROL</h1>
      </header>
      <table className="Display-table">
        <tbody>
          <tr>
            <td className='Display-table-td'><DisplayData name="Temperature" value={26}></DisplayData></td>
            <td className='Display-table-td'><DisplayData name="Humidity" value={0.6}></DisplayData></td>
          </tr>
          <tr>
            <td className='Display-table-td'><DisplayData name="Temperature" value={26}></DisplayData></td>
            <td className='Display-table-td'><DisplayData name="Humidity" value={0.6}></DisplayData></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
