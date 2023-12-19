import apiClient from "../services/api-client";
import { useState,useEffect } from "react";
import { CanceledError} from 'axios';

export interface Genre{
    id:number,
    name:string,
}
interface GenresData{
    count:number,
    results:Genre[]

}

const useGenre=()=>{
    const[genre,setGenre]=useState<Genre[]>([]);
    const[err,setErr]=useState('');
    const[isLoading,setLoading]=useState(true)
    // console.log(isLoading)
    useEffect(()=>{
        const controller=new AbortController();
        apiClient.get<GenresData>('/genres',{signal:controller.signal})
      .then(res=>{setGenre(res.data.results)
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
    return {genre,err,isLoading};
}
export default useGenre;