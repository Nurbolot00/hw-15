import React from 'react';
import styled from 'styled-components';
import { useCounter } from '../../hooks/useCounter';
import Button from '../UI/button/Button';

const CounterHook = () => {
    const {count,incrementHandler,decrementHandler} = useCounter(0)
    return (
        <Container>
            <h1>COUNTER HOOK</h1>
            <h1>{count}</h1>
            <Button onClick={decrementHandler}>-</Button>
            <Button onClick={incrementHandler}>+</Button>
        </Container>
    );
};

export default CounterHook;


const Container = styled.div`
    margin-bottom: 2rem;
    border-bottom: 1px solid;
    padding: 1rem;
`