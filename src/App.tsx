import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import DisplayData from './DisplayData';
import ControlButtons from './ControlButtons';
import { render } from '@testing-library/react';
import DisplayUpdate from './DisplayUpdate';


function App() {
  var today = new Date();
  const [autoOn, setAutoOn] = useState(false);
  const [lastestUpdate, setLastestUpdate] = useState(toHMS(today));

  function autoOnClick() {
    setAutoOn(!autoOn)
  }

  const intervalId:any = useRef();

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalId.current);
  },[lastestUpdate]);

  function toHMS(date:Date){
    return (today.getHours()<10? "0"+today.getHours():today.getHours()) + ':' + (today.getMinutes()<10? "0"+today.getMinutes():today.getMinutes()) + ':' + (today.getSeconds()<10? "0"+today.getSeconds():today.getSeconds())
  }

  function startInterval(){
    intervalId.current = setInterval(() => {
      Update()
    },5000)
  }

  function Update(){
    today = new Date();
    setLastestUpdate(toHMS(today));
    clearInterval(intervalId.current);
    startInterval();
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

      <DisplayUpdate time={lastestUpdate} update={Update}></DisplayUpdate>

      <div className='Table-div'>
        <table className="Display-table">
          <tbody>
            <tr className='Display-table-tr'>
              <td className='Display-table-td'><DisplayData name="Temperature" value={26}></DisplayData></td>
              <td className='Display-table-td'><DisplayData name="Humidity" value={0.6}></DisplayData></td>
            </tr>
            <tr className='Display-table-tr'>
              <td className='Display-table-td'><DisplayData name="Temperature" value={26}></DisplayData></td>
              <td className='Display-table-td'><DisplayData name="Humidity" value={0.6}></DisplayData></td>
            </tr>
          </tbody>
        </table>
      </div>
      

      <div>
        <ControlButtons autoOn={autoOn} autoOnClick={autoOnClick}></ControlButtons>
      </div>
    </div>
  );
}



export default App;
