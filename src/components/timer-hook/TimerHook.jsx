// import React, { useState } from 'react';
import styled from 'styled-components';
// import Button from '../UI/button/Button';
// import Input from '../UI/input/Input';
import SecondsTimer from './SecondsTimer';

const TimerHook = () => {
    // const [timerValue,setTimerValue] = useState('')
  
    // const timerValueChangeHandler = (e) =>{
    //   console.log(e.target.value);
    //   e.preventDefault()
    //    setTimerValue(e.target.value)
    // }

    // const submitHandler = (e) =>{
    //     e.preventDefault()
        
        // console.log("timerValue" ,timerValue) 
    

    return (
      <Container>
        <h1>TIMER HOOK</h1>
        <form>
        {/* <Input type='number' value={timerValue} onChange={(e) => timerValueChangeHandler(e)}/>
        <Button onClick={submitHandler}>Start</Button> */}
        </form>
       <SecondsTimer/>
      </Container>
    );
      }

  export default TimerHook


  const Container = styled.div`
    margin-top: 3rem;
    padding: 3rem;
  `