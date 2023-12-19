import apiClient from "../services/api-client";
import { useState,useEffect } from "react";
import { CanceledError} from 'axios';

interface FetchResponse<T>{
    count:number,
    results:T[]

}

const useData=<T>(endpoint:string)=>{
    const[data,setData]=useState<T[]>([]);
    const[err,setErr]=useState('');
    const[isLoading,setLoading]=useState(true)
    // console.log(isLoading)
    useEffect(()=>{
        const controller=new AbortController();
        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal})
      .then(res=>{setData(res.data.results)
       setLoading(false)
        // console.log(isLoading)
    })
      .catch(err=>{
         if (err instanceof CanceledError) return;
        setErr(err.message)
        setLoading(false)
        
    })
      return ()=>controller.abort()
    },[]);
    return {data,err,isLoading};
}
export default useData;