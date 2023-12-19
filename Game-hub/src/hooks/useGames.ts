import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError} from 'axios';
export interface Platform{
    name:string,
    slug:string,
    id:number,
}

export interface Game{
    id:number,
    name:string,
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number;
}
interface GamesData{
    count:number,
    results:Game[]

}

const useGames=()=>{
    const[game,setGames]=useState<Game[]>([]);
    const[err,setErr]=useState('');
    const[isLoading,setLoading]=useState(true)
    // console.log(isLoading)
    useEffect(()=>{
        const controller=new AbortController();
        apiClient.get<GamesData>('/games',{signal:controller.signal})
      .then(res=>{setGames(res.data.results)
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
    return {game,err,isLoading};
}
export default useGames;