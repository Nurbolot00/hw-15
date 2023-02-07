import React from 'react';
import { useTimer } from '../../hooks/useTimer';
import Button from '../UI/button/Button';

const SecondsTimer = () => {
    const {seconds,isTimerStopped,stopTimerHandler,continueTimerHandler} = useTimer(1);
    return (
        <div>
        <h3>Seconds: {seconds} </h3> 
        {isTimerStopped ? <Button disabled onClick={stopTimerHandler}>Stop</Button> : <Button onClick={stopTimerHandler}>Stop</Button> }
        {!isTimerStopped ? <Button disabled >Continue</Button> : <Button onClick={continueTimerHandler}>Continue</Button> }
     </div>
    );
};

export default SecondsTimer;