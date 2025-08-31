import { useRef, useState } from "react";

export default function RefTimer() {
  const [second, setSecond] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const setTimer=()=>{
    if(intervalRef.current===null){
        intervalRef.current = window.setInterval(()=>{
            setSecond(prev => prev+1)
        },100)
    }
  }
  const stopTimer =()=>{
    if(intervalRef.current !== null){
        clearInterval(intervalRef.current);
        intervalRef.current = null;

    }
  }

  return (<div>
    <h5>ref timer</h5>
    <p>second:{second}</p>
    <button onClick={setTimer}>start</button>
    <button onClick={stopTimer}>stop</button>
  </div>
  )
}
