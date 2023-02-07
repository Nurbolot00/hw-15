import { useState } from "react"


export const useCounter = (initialState,incrementLevel,decrementLevel) =>{
    const [count,setCount] = useState(initialState || 0)

    const incrementHandler = () =>{
        setCount((prevState) => prevState + (incrementLevel || 1))
    }

    const decrementHandler = () =>{
        setCount((prevState) => {
            // if(prevState > 0){
       return prevState - (decrementLevel || 1)
            // }
            // return prevState
        })
    }

    return {
        count,
        incrementHandler,
        decrementHandler
    }
}