import { useState, useEffect } from "react";
const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const abortCont = new AbortController()
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
        .then(response => {
            if(!response.ok){
                throw Error('could not fetch data for resource')
            }
            return response.json()
        })  
        .then(data => {
            //console.log(data)
            setData(data)
            setIsPending(false) 
            setError(null)
        })
        .catch(err=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setIsPending(false)
                setError(err.message)
            }

        })
        })
        return ()=> abortCont.abort()
    },[url])

    return {data, isPending, error}
}
export default useFetch