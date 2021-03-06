import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import DisplayData from './DisplayData';
import ControlButtons from './ControlButtons';
import DisplayUpdate from './DisplayUpdate';
import { useObjectVal } from 'react-firebase-hooks/database';
import { getDatabase, ref, set } from 'firebase/database';
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
export const database = getDatabase(firebaseApp);

function useSensorData(autoOn:Boolean,slider:number,setSlider:Function) {
  const [ldr, load_1] = useObjectVal<string>(ref(database, 'l'));
  const [dht, load_2] = useObjectVal<string>(ref(database, 'd'));
  const [dust, load_3] = useObjectVal<string>(ref(database, 'D'));

  console.log("Get Data from Firebase " + Date().toString());
  
  if (
    ldr === undefined ||
    dht === undefined ||
    dust === undefined) {
    return {
      ldr: null,
      temp: null,
      humidity: null,
      dust: null
    };
  }

  const [temp, humidity] = dht.split(' ');

  var brightness = 1-((+ldr)/4096);

  if(autoOn){
    //Secret SOOT
    const brightnessEffect = ((((brightness)*2)-1)*0.3)+1;
    var fanSpeed = (200/3)*(+temp - 25)*brightnessEffect;
    if(+dust > 100){
      fanSpeed*=1.1;
    }
    fanSpeed = Math.min(Math.round(fanSpeed),999);
    fanSpeed = Math.max(fanSpeed,0);

    if(slider!=fanSpeed){
      console.log("Set Auto Fan to " + fanSpeed);
      setSlider(fanSpeed);
      set(ref(database, "speed"), +fanSpeed);
    }
  }

  brightness = Math.round(brightness*100)/100;

  return {
    ldr: brightness,
    temp: +temp,
    humidity: +humidity,
    dust: +dust
  };
}

function App() {
  var today = new Date();
  const [autoOn, setAutoOn] = useState(false);
  const [lastestUpdate, setLastestUpdate] = useState(toHMS(today));
  const [slider, setSlider] = useState(0);
  var sensorData = useSensorData(autoOn,slider,setSlider);

  function autoOnClick() {
    setAutoOn(!autoOn)
  }

  const intervalId: any = useRef<NodeJS.Timer>();

  useEffect(() => {
    today = new Date();
    setLastestUpdate(toHMS(today));
  }, [sensorData]);

  function toHMS(date: Date) {
    return (today.getHours() < 10 ? "0" + today.getHours() : today.getHours()) + ':' + (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()) + ':' + (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds())
  }

  function startInterval() {
    /*intervalId.current = setInterval(() => {
      Update()
    }, 5000)*/
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

      <DisplayUpdate time={lastestUpdate} update={Update}></DisplayUpdate>

      <div className='Table-div'>
        <table className="Display-table">
          <tbody>
            <tr className='Display-table-tr'>
              <td className='Display-table-td'><DisplayData name="Temperature" value={sensorData.temp}></DisplayData></td>
              <td className='Display-table-td'><DisplayData name="Humidity" value={sensorData.humidity}></DisplayData></td>
            </tr>
            <tr className='Display-table-tr'>
              <td className='Display-table-td'><DisplayData name="Brightness" value={sensorData.ldr}></DisplayData></td>
              <td className='Display-table-td'><DisplayData name="PM" value={sensorData.dust}></DisplayData></td>
            </tr>
          </tbody>
        </table>
      </div>

      <ControlButtons autoOn={autoOn} autoOnClick={autoOnClick} slider={slider} setSlider={setSlider}></ControlButtons>
      {slider}
    </div>
  );
}

export default App;
