import React, { useState } from 'react';
import './App.css';
import DisplayData from './DisplayData';
import ControlButtons from './ControlButtons';
import { render } from '@testing-library/react';


function App() {
  var [autoOn, setAutoOn] = useState(false);

  function autoOnClick() {
    setAutoOn(!autoOn)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>AirConTROL</h1>
      </header>

      {/* <div className="Display-line">
        <DisplayData name="Temperature" value={26}></DisplayData>
        <DisplayData name="Humidity" value={0.6}></DisplayData>
      </div> */}

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

      <div>
        <ControlButtons autoOn={autoOn} autoOnClick={autoOnClick}></ControlButtons>
      </div>
    </div>
  );
}



export default App;
