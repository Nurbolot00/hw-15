import { useState } from "react"


export const useInput = (initial,inputType,required) =>{
    const [value,setValue] = useState(initial)
    const [error,setError] = useState(null)
    const type = inputType || 'text'

    return {
        value,
        error,
        onChange: e => setValue(e.target.value),
        onBlur: e => {
            if(!e.target.value && required){setError("Required field")}
            else setError(null)
        },
        type,
    }

}