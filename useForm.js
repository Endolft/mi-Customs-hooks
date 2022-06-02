import  { useState } from 'react'

export const useForm = (inicialState={}) => {

    const [value, setvalue] = useState(inicialState)

    const reset= ()=>{

        setvalue(inicialState)
    }

    const HandleInputChange= ({target})=>{

        setvalue({
            ...value,
            [target.name]:target.value
        })
        
    }


  return [ value,HandleInputChange,reset]
}
