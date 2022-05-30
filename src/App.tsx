import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import DisplayData from './DisplayData';
import ControlButtons from './ControlButtons';
import DisplayUpdate from './DisplayUpdate';
import { useObjectVal } from 'react-firebase-hooks/database';
import { getDatabase, ref } from 'firebase/database';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNwibrAs3vouz0LYdWKSJ5R9_cL9nQhHQ",
  authDomain: "embedded-lab-project.firebaseapp.com",
  databaseURL: "https://embedded-lab-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "embedded-lab-project",
  storageBucket: "embedded-lab-project.appspot.com",
  messagingSenderId: "414851825213",
  appId: "1:414851825213:web:11c113b3999935fb7e7454"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

function useSensorData() {
  const [ldr, load_1] = useObjectVal<string>(ref(database, 'l'));
  const [dht, load_2] = useObjectVal<string>(ref(database, 'd'));
  const [dust, load_3] = useObjectVal<string>(ref(database, 'D'));

  if (
    ldr === undefined ||
    dht === undefined ||
    dust === undefined) {
    return undefined;
  }

  const [temp, humidity] = dht.split(' ');

  return [{
    ldr: +ldr,
    temp: +temp,
    humidity: +humidity,
    dust: +dust
  }];
}

function App() {
  var today = new Date();
  const [autoOn, setAutoOn] = useState(false);
  const [lastestUpdate, setLastestUpdate] = useState(toHMS(today));
  const [slider, setSlider] = useState(0);
  const sensorData = useSensorData();

  function autoOnClick() {
    setAutoOn(!autoOn)
  }

  const intervalId = useRef<NodeJS.Timer>();

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalId.current);
  }, [lastestUpdate]);

  function toHMS(date: Date) {
    return (today.getHours() < 10 ? "0" + today.getHours() : today.getHours()) + ':' + (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()) + ':' + (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds())
  }

  function startInterval() {
    intervalId.current = setInterval(() => {
      Update()
    }, 5000)
  }

  function Update() {
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

      <ControlButtons autoOn={autoOn} autoOnClick={autoOnClick} slider={setSlider}></ControlButtons>
    </div>
  );
}



export default App;
