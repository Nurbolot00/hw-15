import { useEffect, useState } from "react";



export const useTimer = (initial) => {
    console.log("initial",  typeof(initial));
    const [isTimerStopped,setTimerStopped] = useState(false)
    const [seconds, setSeconds] = useState(initial * 60);

    console.log(seconds);

    const stopTimerHandler = (e) =>{
        e.preventDefault()
        setTimerStopped(true)
        console.log("Stop clicked")
    }

    const continueTimerHandler = (e) => {
        e.preventDefault()
        setTimerStopped(false)
        console.log("restart Clicked");
    }

    console.log(isTimerStopped);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      if(seconds === 0){
        return clearInterval(interval)
      }
      if(isTimerStopped){
        return clearInterval(interval)
      }
      return () => clearInterval(interval);
    });
     
    return {
        seconds,
        isTimerStopped,
        stopTimerHandler,
        continueTimerHandler
    };
  };
  

  