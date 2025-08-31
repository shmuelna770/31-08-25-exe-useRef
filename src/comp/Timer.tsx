import { useState } from "react";

export default function Timer() {
  const [second, setSecond] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const setTimer=()=>{
    if(!intervalId){
        const id = window.setInterval(()=>{
            setSecond(prev => prev+1)
        },1000)
        setIntervalId(id)
    }
  }
  const stopTimer =()=>{
    if(intervalId){
        clearInterval(intervalId);
        setIntervalId(null);

    }
  }

  return <div>
    <p>second:{second}</p>
    <button onClick={setTimer}>start</button>
    <button onClick={stopTimer}>stop</button>
  </div>;
}
