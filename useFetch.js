import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })


    const getFetch = async() => {
        try {
            setState({
                ...state,
                isLoading: true,
            })
    
            const resp = await fetch(url);
            const data = await resp.json()
    
            setState({
                data,
                isLoading: false,
                hasError: null,
            })
            
        } catch (error) {
            setState({
                ...state,
                data: null,
                hasError: 'Hubo un problema en el sistema'
            })
        }
    }

    // const onNextAdvice = (id)=> {
    //     const { amentar } = useCounter(id)

    //     amentar(1)
    // }

    useEffect(() => {
      getFetch();
    }, [url])
    

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    // onNextAdvice
  }
}
