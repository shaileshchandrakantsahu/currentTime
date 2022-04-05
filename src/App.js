import { useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState();
  const showTime = () => {
    //let date = new Date().toLocaleString()
    setTime(new Date().toLocaleString());
  };
  //setInterval(showTime,1000)

  function changeColor() {
    console.warn("color");
  }
  return (
    <div className="App">
      <h1>{time}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={showTime}>Time</button>
      <button onClick={changeColor}>Color</button>
    </div>
  );
}
