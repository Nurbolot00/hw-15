import React from 'react';
import { useInput } from '../../hooks/useInput';
import Input from '../UI/input/Input';
import styled from 'styled-components'

const InputHook = () => {
   const inp =  useInput('',null,true)
   const inputHelpersNumber =  useInput('','number',true)
   const inputHelpersPassword =  useInput('','password',true)
    return (
        <Container>
            <h1>INPUT HOOK</h1>
            <InputHookContainer>
            <h3>Input TEXT</h3>
            <label htmlFor="textInput">Type your text:  </label>
            <Input {...inp} id='textInput'/>
            {inp.error && <span style={{color: "red"}} >{inp.error}</span>}
            </InputHookContainer>
            
            <InputHookContainer>
            <h3>Input NUMBERS</h3>
            <label htmlFor="numberInput">Type your number:  </label>
            <Input {...inputHelpersNumber} id='numberInput'/>
            {inputHelpersNumber.error && <span style={{color: "red"}} >{inputHelpersNumber.error}</span>}
            </InputHookContainer>
            
            <InputHookContainer>
            <h3>Input PASSWORD</h3>
            <label htmlFor="passwordInput">Type your password:  </label>
            <Input {...inputHelpersPassword} id='passwordInput'/>
            {inputHelpersPassword.error && <span style={{color: "red"}} >{inputHelpersPassword.error}</span>}
            </InputHookContainer>
        </Container>
    );
};

export default InputHook;

const InputHookContainer = styled.div`
    margin-bottom: 2rem;
`

const Container = styled.div`
    margin-top: 3rem;
    padding: 2rem;
    border-bottom: 1px solid;
`