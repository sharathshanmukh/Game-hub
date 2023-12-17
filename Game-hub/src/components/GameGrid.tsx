import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react'

interface Game{
    id:number,
    name:string,
}
interface GamesData{
    count:number,
    results:Game[]
}
const GameGrid = () => {
  const[game,setGames]=useState<Game[]>([]);
  const[err,setErr]=useState('');
  useEffect(()=>{
    apiClient.get<GamesData>('/gmes')
    .then(res=>setGames(res.data.results))
    .catch(err=>setErr(err.message))
  })
    return (
        <>
        {err && <Text>{err}</Text>}
        <ul>
            {game.map(g=><li key={g.id}>{g.name}</li>)}
        </ul>
    // <div>GameGrid</div>
    </>
  )
}

export default GameGrid