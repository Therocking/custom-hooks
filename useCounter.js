import { useState } from 'react'

export const useCounter = (inicialValue = 10) => {

    const [Count, setCount] = useState(inicialValue)

    const decrementar = ( value =1 ) => {
        setCount( (current)=> current > 1 ? current - value : current )
    }
    const reset = () => {
        setCount( inicialValue )
    }
    const amentar = ( value = 1 ) => {
        setCount( (current)=> current + value   )
    }

  return {
    Count,
    decrementar,
    amentar,
    reset,
  }
}
